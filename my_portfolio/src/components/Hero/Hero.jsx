import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero_container'>
        <div className='hero_content'>
             <h2>Building Experiences</h2>
             <p>
                Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
             </p>
        </div>
        <div className='hero_img'>
            <div>
              <div className='tech_icon'>
                  <img src='/assets/images/html.png' alt='profile_image'></img>
              </div>
                  <img className='prof' src='/assets/images/profile_image.jpeg' alt='HTML'></img>
            </div>

          <div>
            <div className='tech_icon'>
              <img src='/assets/images/css.svg' alt='CSS'></img>
            </div>
            <div className='tech_icon'>
              <img src='/assets/images/JS.png' alt='JS'></img>
            </div>
            <div className='tech_icon'>
              <img src='/assets/images/bootstrap.png' alt='Bootstrap'></img>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero