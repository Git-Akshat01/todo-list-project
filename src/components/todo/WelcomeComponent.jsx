import { useParams, Link } from 'react-router-dom'

export function WelcomeComponent() {
    const {username} = useParams()
    return (
        <div className='WelcomeComponent'>
            <h1>Welcome {username}</h1>
            
            <div>
                Manage Your Todos- <Link to="/todos">Here</Link> 
            </div>
        </div>
        
    )
}