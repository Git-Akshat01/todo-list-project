import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeaderComponent } from './HeaderComponent'
import { WelcomeComponent } from './WelcomeComponent'
import { LoginComponent } from './LoginComponent'
import { LogoutComponent } from './LogoutComponent'
import { ListTodosComponent } from './ListTodosComponent'
import { ErrorComponent } from './ErrorComponent'
import { FooterComponent } from './FooterComponent'


import './TodoApp.css'
import AuthProvider from './Security/AuthContext'

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
                        <Route path='/welcome/:username' element={<WelcomeComponent />} />
                        <Route path='*' element={<ErrorComponent />} />
                        <Route path='/todos' element={<ListTodosComponent />} />
                        <Route path='/logout' element={<LogoutComponent />} />
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
            
        </div>
    )
}









