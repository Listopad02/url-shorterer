import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink } from "react-router-dom";
import api from '../../utils/api'
import './Service.css'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import copy from "../../img/copy.png"

const Service = () => {
    const [link, setLink] = useState('')
    const [shortLink, setShortLink] = useState('')
    const [open, setOpen] = useState(false)
    const [success, setSuccess] = useState(true)
    const navigate = useNavigate()

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    useEffect(() => {
        if (!localStorage.getItem("access_token")) {
          navigate("/")
        }
    })

    async function createShortLink() {
        if (link) {
            try {
                const response = await api(`/squeeze?link=${link}`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    }
                })
                setShortLink('http://79.143.31.216/s/' + response.short)
            } catch(err) {
                console.log(err)
            }
        }
    } 

    function logOut() {
        localStorage.removeItem('access_token')
        navigate('/')
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    function copyLink() {
        if (shortLink === '') {
            setSuccess(false)
        } else {
            navigator.clipboard.writeText(shortLink)
        }
        setOpen(true)
    }

    return (
        <div className='service'>
            <div className="service-container">
                <div className="service-title">
                    <h1 className='service-title__head'>Short URL Generator</h1>
                    <h2 className='service-title__text'>URL shorterer built to generate shorter links for <br /> better click impression</h2>
                </div>
                <div className='service-info'>
                    <p className='service-info__text'>
                        You can see your full profile statistics <NavLink to={'/statistics'} className='service-info__navLink'><span className='service-info__link'>here</span></NavLink>.
                    </p>
                </div>
                <div className="service-forms">
                    <div className="service-forms__container">
                        <input type="text" 
                            placeholder='Paste your link here' 
                            className='service-forms__input'
                            onChange={e => setLink(e.target.value)} />
                    </div>
                    <button className='service-forms__button'
                    onClick={() => createShortLink()}>Create a link</button>
                    <div className="service-forms__copy">
                        <input type="text" 
                               placeholder='Your short link will be here' 
                               className='service-forms__input' 
                               value={shortLink}
                               readOnly />
                        <button className='service-forms__copy-button'
                                onClick={() => copyLink()}>
                            <img src={copy} alt="copy" />
                        </button>
                    </div>
                    
                </div>
                <div className="service-logout">
                    <p className='login-options__text'>
                        Want to switch an account? <span className='link' onClick={() => logOut()}>Log out</span>
                    </p>
                </div>
                <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert severity={success ? 'success' : 'error'} sx={{ width: '100%' }}>
                        {success ? 'Link have been copied!' : 'Field is empty!'}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default Service