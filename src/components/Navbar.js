import React, { useState } from 'react'
import logo from "../assets/logo-1.png"
import {  Link as RouterLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = () => {
 

  const [isMenuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handleItemClick = () => {
    setMenuOpen(false)
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <nav className='navbar'>
      <div className='nav-header nav-center'>
        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <span className='logo'>
          <RouterLink to={`/`} onClick={scrollToTop}>
            <img src={logo} alt='' className='logo' />
          </RouterLink>
        </span>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className='nav-item'>
            <RouterLink
              to='/'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              Accueil
            </RouterLink>
          </li>

          <li className='nav-item'>
            <RouterLink
              to='/about'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              À Propos De Nous
            </RouterLink>
          </li>

          <li className='nav-item'>
            <RouterLink
              to='/history'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              histoire
            </RouterLink>
          </li>
          <li className='nav-item'>
            <RouterLink
              to='/blog'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              blog
            </RouterLink>
          </li>
          <li className='nav-item'>
            <RouterLink
              to='/gallery'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              gallery
            </RouterLink>
          </li>
          <li className='nav-item'>
            <RouterLink
              to='/contact'
              onClick={() => {
                scrollToTop()
                handleItemClick()
              }}
            >
              contact
            </RouterLink>
          </li>
          {location.pathname.startsWith('/menuItems/') && (
            <li className='nav-item'>
              <RouterLink to='/' onClick={handleItemClick}>
                Back to Menu
              </RouterLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
