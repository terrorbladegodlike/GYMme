import React, { useState, useEffect } from 'react'

// Import Header Data
import { header } from '../data'

// Import Components
import Nav from './Nav';
import NavMobile from './NavMobile';

// Import Icons
import { RiMenu4Fill, RiCloseFill } from 'react-icons/ri'

const Header = () => {

  // Header state
  const [isActive, setIsActive] = useState(false)

  // Nav mobile state
  const [navMobile, setNavMobile] = useState(false)

  // Scroll Event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
    })
  })

  // Destructure header data
  const { logo, btnLoginText, btnSignupText } = header

  return (
    <header className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg=transparent py-[20px]'} fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>

      {/* Logo */}
      <a href="index.html">
        <img className='h-[30px]' src={logo} alt="logo" />
      </a>

      {/* Nav - Initially hidden - Show on desktop */}
      <Nav />

      {/* Btns - Initially hidden - Show on desktop */}
      <div className='hidden lg:flex space-x-4'>
        <button className='btn btn-sm text-white hover:text-primary-200 transition'>
          {btnLoginText}
        </button>
        <button className='btn btn-sm btn-primary'>
          {btnSignupText}
        </button>
      </div>

      {/* Nav menu btn - Hide on desktop */}
      <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden absolute right-4'>
        {navMobile ? (
          <RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />
        ) : (
          <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer' />
        )}
      </div>

      {/* Nav mobile - Hide on desktop */}
      <NavMobile navMobile={navMobile} />

    </header>
  )
}

export default Header