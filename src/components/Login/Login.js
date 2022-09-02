import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className='login-container'>

        <div className="login-title">
          <h1 className='login-title__header'>Welcome back</h1>
          <h2 className='login-title__text'>Please enter your details</h2>
        </div>

        <div className="login-forms">
          <p className='login-forms__name'>Login</p>
          <input type="text" placeholder='Enter your login' className='login-forms__input' />
          <p className='login-forms__name'>Password</p>
          <input type="password" placeholder='••••••' className='login-forms__input' />
        </div>

        <div className="login-options">
          <button className='login-options__button'>Sign in</button>
          <p className='login-options__text'>Don't have an account? <NavLink to={'/signup'}>
              <span className='link'>Sign up</span></NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login