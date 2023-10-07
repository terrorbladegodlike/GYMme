import React from 'react'

// Import Data
import { faq } from '../data'

// Import Components
import Accordion from './Accordion';

const Faq = () => {

  // Destructure FAD Data
  const { icon, title, accordions } = faq

  return (
    <section className='section pt-[480px] lg:pt-[280px]'>
      <div className='max-w-[768px] mx-auto lg:bg-faq bg-no-repeat bg-custom bg-center lg:h-[1160px] lg:pt-6'>
        {/* Section Title */}
        <div
          className='section-title-group justify-start lg:justify-center -space-x-4 lg:max-w-[540px] mx-auto px-4 lg:px-0'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-offset='200'
        >
          <img src={icon} alt="icon" className='lg:hidden' />
          <h2 className='h2 section-title lg:mt-[100px]'>
            <span className='text-primary-200'>.</span>
            {title}
          </h2>
        </div>
        {/* Accordion List */}
        <div
          data-aos='fade-up'
          data-aos-offset='300'
          data-aos-delay='200'
          className='flex flex-col gap-y-4 px-4'
        >
          {accordions.map((accordion, index) => {
            return (
              <Accordion accordion={accordion} key={index} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq