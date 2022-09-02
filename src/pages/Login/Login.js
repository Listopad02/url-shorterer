import React, { useState } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import api from '../../utils/api'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  async function logIn() {
    try {
      await api("/login", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: '',
          username: login,
          password: password,
          scope: '',
          client_id: '',
          client_secret: ''
        })
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='login'>
      <div className='login-container'>

        <div className="login-title">
          <h1 className='login-title__header'>Welcome back</h1>
          <h2 className='login-title__text'>Please enter your details</h2>
        </div>

        <div className="login-forms">
          <p className='login-forms__name'>Login</p>
          <input type="text" 
                 placeholder='Enter your login' 
                 className='login-forms__input'
                 onChange={e => setLogin(e.target.value)} />
          <p className='login-forms__name'>Password</p>
          <input type="password" 
                 placeholder='••••••' 
                 className='login-forms__input'
                 onChange={e => setPassword(e.target.value)} />
        </div>

        <div className="login-options">
          <button className='login-options__button'
                  onClick={() => logIn()}
          >Sign in</button>
          <p className='login-options__text'>Don't have an account? <NavLink to={'/signup'}>
              <span className='link'>Sign up</span></NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login