import React from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaGlobe,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container section-nav'>
        <div>
          <h3>Adresse</h3>
          <p>
            <FaMapMarkerAlt />
            Diakhao Sine, Sénégal
          </p>
          <p>
            <FaPhone /> +221 33 941 00 00
          </p>
          <p>
            <FaEnvelope /> contact@diakhaosine.sn
          </p>
        </div>
        <div>
          <h3>Suivez-Nous</h3>
          <p>
            <FaFacebook /> Facebook
          </p>
          <p>
            <FaTwitter /> Twitter
          </p>
          <p>
            <FaInstagram /> Instagram
          </p>
        </div>

        <div>
          <h3>Heures d'Ouverture</h3>
          <p>Lundi au Vendredi : 9h00 - 17h00</p>
          <p>Samedi : 9h00 - 12h00</p>
          <p>Dimanche : Fermé</p>
        </div>

        <div>
          <h3>Services</h3>
          <p>
            <FaGlobe /> Historique Bour Sine
          </p>
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          borderTop: '1px solid #fff',
          paddingTop: '10px',
        }}
      >
        <p>bour sine &copy; {new Date().getFullYear()} adamadiouf</p>
      </div>
    </div>
  )
}

export default Footer
