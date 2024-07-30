import React from 'react'
import './ContactFrom.css'

const ContactFrom = () => {
  return (
    <div className='contact_form_content'>
        <form>
            <div className='name_container'>
                <input type='text' name='firstname' placeholder='First Name'></input>
                <input type='text' name='lastname' placeholder='Last Name'></input>
            </div> 
            <input type='text' name='email' placeholder='Email'></input>
            <textarea type='text' name='message' placeholder='Message' rows={3}></textarea>
            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactFrom