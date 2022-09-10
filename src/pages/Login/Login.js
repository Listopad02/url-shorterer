import React, { useState, useEffect } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import api from '../../utils/api'
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    localStorage.removeItem('access_token')
  })

  let formData = {
    grant_type: "",
    username: login,
    password: password,
    scope: "",
    client_id: "",
    client_secret: ""
  };

  const encodeFormData = (data) => {
    return Object.keys(data).map(key => 
      encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    ).join("&");
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  async function logIn() {
    try {
      const response = await api("/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodeFormData(formData)
      })
      localStorage.setItem("access_token", response.access_token)
      if (localStorage.getItem("access_token") !== 'undefined') {
        navigate("/service")
      } else {
        setOpen(true)
      }
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
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity='error' sx={{ width: '100%' }}>
            Please, check your data again!
          </Alert>
        </Snackbar>
      </div>
    </div>
  )
}

export default Login