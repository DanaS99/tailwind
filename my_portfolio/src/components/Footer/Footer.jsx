import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <p>@2024 Dana Sobh, Happy Coding</p>
        </div>
        <div className='footer-section'>
          <a href='#home'>Back to Top</a>
        </div>
        <div className='footer-section'>
          <a href='https://www.facebook.com'><i className='fab fa-facebook'></i></a>
          <a href='https://www.twitter.com'><i className='fab fa-twitter'></i></a>
          <a href='https://www.linkedin.com/in/dana-sobh-a26276227/'><i className='fab fa-linkedin'></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
