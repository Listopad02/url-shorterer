import React, { useState, useEffect } from 'react'
import './Signup.css'
import api from '../../utils/api'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Signup = () => {
  const [login, setLogin] = useState('')
  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    localStorage.removeItem('access_token')
  })

  async function signUp() {
    try {
      const response = await api(`/register?username=${login}&password=${password}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
      })
      if (!response.detail) {
        navigate("/")
      } else {
        setOpen(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity='error' sx={{ width: '100%' }}>
            Please, check your data again!
          </Alert>
        </Snackbar>
      </div>
    </div>
  )
}

export default Signup