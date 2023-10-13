import React from 'react'


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container section-center'>
        <p>
          <h3>Diakhoa Sine</h3>
          <h3>+221 777062556</h3>
        </p>
        <p>
          <span> Mam Biram Diouf</span>
        </p>
        <p>
          <span>Email:adamadiouf2017@gmail.com</span>
        </p>
       
      </div>

      <p className='footer-date'>
        &copy; {new Date().getFullYear()} adamadiouf. Tous droits réservés.
      </p>
    </footer>
  )
}

export default Footer
