import React from 'react'
import { Send } from '@material-ui/icons'

const Newsletter = () => {
  return (
    <div className='news-container'>
        <h1 className='news-title'>NewsLetter</h1>
        <div className='news-desc'>Get timely updates from your favourite products</div>
        <div className='news-inputcontainer'>
            <input className='news-input' placeholder='Your Email'/>
            <button className='news-button'>
                <Send/>
            </button>
        </div>
    </div>
  )
}

export default Newsletter