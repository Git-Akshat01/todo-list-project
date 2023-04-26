import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HeaderComponent } from './HeaderComponent'
import { WelcomeComponent } from './WelcomeComponent'
import { LoginComponent } from './LoginComponent'
import { LogoutComponent } from './LogoutComponent'
import { ListTodosComponent } from './ListTodosComponent'
import { ErrorComponent } from './ErrorComponent'
import { FooterComponent } from './FooterComponent'


import './TodoApp.css'
import AuthProvider, { useAuth } from './Security/AuthContext'

function AuthenticatedRoute({children}) {
    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children
    
    return <Navigate to="/" />
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            {/* Todo Management Application */}
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>

                        <Route path='/' element={<LoginComponent />} />

                        <Route path='/login' element={<LoginComponent />} />

                        <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                            <WelcomeComponent />
                        </AuthenticatedRoute>
                        } />

                        <Route path='*' element={<ErrorComponent />} />

                        <Route path='/todos' element={
                        <AuthenticatedRoute>
                            <ListTodosComponent />
                        </AuthenticatedRoute>
                        } />

                        <Route path='/logout' element={
                        <AuthenticatedRoute>
                            <LogoutComponent />
                        </AuthenticatedRoute>
                        } />

                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
            
        </div>
    )
}









