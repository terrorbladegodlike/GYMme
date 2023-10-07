import React from 'react'

// Import Data
import { community } from '../data'

// Import Components
import CommunitySlider from './CommunitySlider';

const Community = () => {

  // Desturcute Community Data
  const { icon, title, testimonials } = community

  return (
    <section className='section relative'>
      <div className="container mx-auto">
        <div className="flex">
          {/* Section Title */}
          <div
            data-aos='fade-up'
            data-aos-delay='200'
            data-aos-offset='200'
            className='section-title-group max-w-[240px] px-4 lg:px-0 lg:ml-0 mx-auto'
          >
            <img src={icon} alt="icon" />
            <h2 className='h2 section-title'>
              {title}
              <span className='text-primary-200'>.</span>
            </h2>
          </div>
          {/* Slider */}
          <div
            className='absolute -right-[375px] lg:-right-[280px] w-[1140px]  top-48 lg:top-0'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-offset='300'
          >
            <CommunitySlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community