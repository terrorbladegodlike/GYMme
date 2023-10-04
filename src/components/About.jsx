import React from 'react'

// Import Data
import { about } from '../data'

// Import Icons
import { IoIosArrowDroprightCircle } from 'react-icons/io'

const About = () => {

  // Destructure About Data
  const { icon, title, subtitle1, subtitle2, link } = about

  return (
    <section className='py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]'>
      <div className="container mx-auto px-[20px] lg:px-[135px]">
        {/* Section Title */}
        <div
          data-aos='fade-up'
          data-aos-delay='100'
          className='section-title-group justify-start'
        >
          <img src={icon} alt="icon" />
          <h2 className='h2 section-title'>
            {title}
            <span className='text-primary-200'>.</span>
          </h2>
        </div>
        {/* Subtitle 1 */}
        <p
          data-aos='fade-up'
          data-aos-delay='200'
          className='md:text-body-md mb-12'
        >
          {subtitle1}
        </p>
        {/* Subtitle 2 */}
        <p
          data-aos='fade-up'
          data-aos-delay='300'
          className='md:text-body-md mb-8'
        >
          {subtitle2}
        </p>
        {/* Link */}
        <div
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <a
            className='link flex items-center gap-x-4 hover:gap-x-6 transition-all'
            href="#!"
          >
            {link}
            <IoIosArrowDroprightCircle className='text-2xl' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About