import { useState } from 'react'

export default function Authentication() {
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    async function handleAuthenticate() {
        
    }

    return (
        <>
            <h2 className='sign-up-text'>{isRegistration ? 'Sign Up' : 'Login'}</h2>
            <p>{isRegistration ? 'Create an account!' 
            : 'Sign into your account!'}</p>
            <input 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }} 
            placeholder='Email'/>
            <input
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }} 
            placeholder='Password'
            type='password'/>
            <button
            onClick={handleAuthenticate}><p>Submit</p></button>
            <hr />
            <div className='register-content'>
                <p>{isRegistration ? 'Already have an account?' 
                : 'Don\'t have an account?'}</p>
                <button
                onClick={() => {
                    setIsRegistration(!isRegistration)
                }}><p>{isRegistration ? 'Sign In' : 'Sign Up'}</p></button>
            </div>
        </>
    )
}