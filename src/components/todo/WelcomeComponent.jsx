import { useParams, Link } from 'react-router-dom'

export function WelcomeComponent() {
    const {username} = useParams()

    function callHelloWorldRestApi() {
        console.log('called')
    }

    return (
        <div className='WelcomeComponent'>
            <h1>Welcome {username}</h1>
            
            <div>
                Manage Your Todos- <Link to="/todos">Here</Link> 
            </div>

            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>

        </div>
        
    )
}