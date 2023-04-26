import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Security/AuthContext'

export function LoginComponent() {

    const [username, setUsername] = useState('in28minutes')

    const [password, setPassword] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    const  authContext = useAuth()


    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(authContext.login(username, password))
        {   
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }
        else
        {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)            
        }
    }

    return (
        <div className="Login">
            <h1>Time to login</h1>
            {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div> }
            {showErrorMessage && <div className='errorMessage'>Authentication Failed. Please Check Your Credentials.</div>}

            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>

                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}