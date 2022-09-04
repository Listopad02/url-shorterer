import React, { useState } from 'react'
import api from '../../utils/api'
import './Service.css'

const Service = () => {
    const [link, setLink] = useState('')
    const [shortLink, setShortLink] = useState('')

    async function createShortLink() {
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

    return (
        <div className='service'>
            <div className="service-container">
                <div className="service-title">
                    <h1 className='service-title__head'>Short URL Generator</h1>
                    <h2 className='service-title__text'>URL shorterer built to generate shorter links for <br /> better click impression</h2>
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
                           value={shortLink}
                           readOnly />
                </div>
            </div>
        </div>
    )
}

export default Service