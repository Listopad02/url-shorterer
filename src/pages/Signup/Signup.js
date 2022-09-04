import React, { useState } from 'react'
import './Signup.css'
import api from '../../utils/api'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function signUp() {
    try {
      await api(`/register?username=${login}&password=${password}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='login'>
      <div className='login-container'>

        <div className="login-title">
          <h1 className='login-title__header'>Nice to meet you</h1>
          <h2 className='login-title__text'>Create your new account</h2>
        </div>

        <div className="login-forms">
          <p className='login-forms__name'>Login</p>
          <input type="text" 
                 placeholder='Enter your login' 
                 className='login-forms__input'
                 onChange={e => setLogin(e.target.value)}
                 required />
          <p className='login-forms__name'>Password</p>
          <input type="password" 
                 placeholder='••••••' 
                 className='login-forms__input'
                 onChange={e => setPassword(e.target.value)}
                 required />
        </div>

        <div className="login-options">
          <button className='login-options__button'
                  onClick={() => signUp()}
          >Create an account</button>
          <p className='login-options__text'>Have an account? <NavLink to={'/'}>
              <span className='link'>Sign in</span></NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup