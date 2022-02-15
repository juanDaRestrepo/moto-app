import React from 'react'
import { useDispatch } from 'react-redux'
import { startGoogleLogin } from '../../redux/actions/auth'

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const handleGoogleLogin = () => {
    console.log("Se disparo esta accion")
    dispatch( startGoogleLogin())
  }
  return (
    <div className='login-screen'>
        <h1>Login</h1>
        <div 
          className="google-btn"
          onClick={ handleGoogleLogin}
        >
        <div className="google-icon-wrapper">
          <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
    </div>
  </div>
  )
}
