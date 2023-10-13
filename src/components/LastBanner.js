import React from 'react'
import a from "../assets/last-banner1.png"
const LastBanner = () => {
  return (
    <div className='last-banner section-center'>
      <img src={a} alt='' className='last-banner-img' />
      <div class='last-banner-content'>
        <p>
          Découvrez la riche histoire et la culture vibrante de notre ville
          bien-aimée.
        </p>
        <a href='/history' class='btn'>
          savoir plus
        </a>
      </div>
    </div>
  )
}

export default LastBanner
