import React from 'react'

// Import Data
import { banner } from './../data';

const Banner = () => {
  // Destructure banner data
  const { titlePart1, titlePart2, subtitle, textBtn } = banner
  return (
    <section className='bg-neutral-500 h-[790px]'>
      <div className="container mx-auto h-full">
        <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>
          {/* Text */}
          <div className='text-white flex-1 z-10 pl-6 lg:pl-0'>
            <h1
              className='h1 text-white mb-8'
              data-aos='fade-down'
              data-aos-delay='500'
            >
              {titlePart1}
              <br />
              <span className='text-primary-200'>{titlePart2}</span>
            </h1>
            <p
              data-aos='fade-down'
              data-aos-delay='600'
              className='max-w-[415px] text-body-md lg:text-body-lg mb-8'
            >
              {subtitle}
            </p>
            <button
              data-aos='fade-down'
              data-aos-delay='700'
              className='btn btm-sm lg:btn-lg btn-secondary'
            >
              {textBtn}
            </button>
          </div>
          {/* Image */}
          <div
            data-aos='fade-right'
            data-aos-delay='900'
            className='bg-blue-300 w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1'
          >
            image
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner