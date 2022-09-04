import React, { useState } from 'react'
import api from '../../utils/api'
import './Service.css'

const Service = () => {
    const [link, setLink] = useState('')

    async function createShortLink() {
        try {
            await api(`/squeeze?link=${link}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            })
        } catch(err) {
            console.log(err)
        }
    } 

    return (
        <div className='service'>
            <div className="service-container">
                <div className="service-title">
                    <h1 className='service-title__head'>Short URL Generator</h1>
                    <h2 className='service-title__text'>URL shortere built to generate shorter links for <br /> better click impression</h2>
                </div>
                <div className="service-forms">
                    <input type="text" 
                           placeholder='Paste your link here' 
                           className='service-forms__input'
                           onChange={e => setLink(e.target.value)} />
                    <button className='service-forms__button'
                    onClick={() => createShortLink()}>Create a link</button>
                    <input type="text" 
                           placeholder='Your short link will be here' 
                           className='service-forms__input' 
                           readOnly />
                </div>
            </div>
        </div>
    )
}

export default Service