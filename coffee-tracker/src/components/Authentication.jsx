import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Authentication(props) {
    const { onCloseModal } = props
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    const {signup, login} = useAuth()

    async function handleAuthenticate() {
        console.log("submit button clicked")
        if(!email || !email.includes('@') || 
        !password || !password.length > 6 || 
        isAuthenticating) {
            return
        }

        try {
            setIsAuthenticating(true)

            if(isRegistration) {
                console.log('creating user')
                await signup(email, password)
            } else {
                console.log('logging in')
                await login(email, password)
            }
            onCloseModal()
        } catch(err) {
            console.log(err.message)
        } finally {
            setIsAuthenticating(false)
        }
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
            onClick={handleAuthenticate}><p>
                {isAuthenticating ? 'Authenticating...' : 'Submit'}
                </p></button>
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