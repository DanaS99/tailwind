import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactFrom from './ContactFrom/ContactFrom'

const ContactMe = () => {
  return (
    <section className='contact_container'>
        <h5>Contact Me</h5>

        <div className='contact_content'>
            <div style={{ flex: 1}}>
                <ContactInfoCard 
                    iconUrl="./assets/images/email.jpeg"
                    text="danasobh164@gmail.com"
                />
                <ContactInfoCard
                    iconUrl="./assets/images/linkdlen.png"
                    text="https://www.linkedin.com/in/dana-sobh-a26276227/"
                />
            </div>
            <div style={{ flex: 1}}>
                <ContactFrom />
            </div>
        </div>
    </section>
  )
}

export default ContactMe