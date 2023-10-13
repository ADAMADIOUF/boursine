import React from 'react'
import a from "../assets/d1.png"
import b from '../assets/d2.png'

import c from '../assets/d3.png'

import d from '../assets/d4.png'

const Discover = () => {
  return (
    <div className='discover section-center'>
      <div className='underline'></div>
      <h2 className='discover-title'>Découvrez Diakhoa Sine en Images</h2>
      <div className='discover-container'>
        <article data-aos='fade-right'>
          <img src={a} alt='' />
          
        </article>
        <article data-aos='fade-right'>
          <img src={b} alt='' />
         
        </article>
        <article data-aos='fade-right'>
          <img src={c} alt='' />
         
        </article>
        <article data-aos='fade-right'>
          <img src={d} alt='' />
         
        </article>
      </div>
    </div>
  )
}

export default Discover
