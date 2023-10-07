import React from 'react'

// Import Data 
import { footer } from '../data'

const Footer = () => {

  // Destructure Footer Data
  const { logo, copyrightText } = footer

  return (
    <footer className='bg-neutral-500 h-[125px] md:h-[195px] px-[20px]'>
      <div
        data-aos='fade-up'
        data-aos-delay='200'
        className="container mx-auto h-full flex justify-between items-center md:items-end mb:pb-[50px]"
      >
        {/* Logo */}
        <a href="#!">
          <img src={logo} alt="logo" />
        </a>
        {/* Copyright Text */}
        <p className='text-neutral-300 text-sm'>
          {copyrightText}
        </p>
      </div>
    </footer>
  )
}

export default Footer