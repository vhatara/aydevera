import React from 'react'
import ContactForm from './ContactForm'

const Footer = () => {
  return (
   <footer id='contact'>
        <div className='contact_div d-flex justify-content-around'>
            <ContactForm />


            <div className='contact_info d-flex align-items-center'>
              <div>
                <h2>Contact Information:</h2>
                <div className='d-flex justify-content-between'>

                <p>Purok 3, Santor,<br />City of Malolos,<br />Bulacan</p>

                <p>Call Us: <br />+63 925 5696 499<br />+63 939 9224 919</p>
                </div>

                <h2>Follow Us!</h2>
                
                <div className='social-icons'>

                  <a className='socials-link' href='https://www.facebook.com/decimodcm' target='_blank' rel='noreferrer'>
                    <i className="bi bi-facebook fs-2"></i>
                  </a>

                  <a className='socials-link' href='https://www.messenger.com/t/decimodcm' target='_blank' rel='noreferrer'>
                  <i className="bi bi-messenger fs-2"></i>
                  </a>

                  <a className='socials-link' href='mailto:davidmndza98@gmail.com' target='_blank' rel='noreferrer'>
                  <i className="bi bi-envelope-fill fs-2"></i>
                  </a>

                </div>
              </div>
            </div>
        </div>

        <div className='footer-div text-center' >
              <div className='footer-text'>
                <p> All rights reserved. David Mendoza © 2024</p>
              </div>
            </div>
   </footer>
  )
}

export default Footer