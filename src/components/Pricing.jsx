import React from 'react'

// Import Data
import { pricing } from '../data'

// Import Components
import PlanList from './PlanList';

const Pricing = () => {

  // Destructure Pricing Data
  const { icon, title, plans } = pricing

  return (
    <section className='section'>
      {/* Section Title */}
      <div
        data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='200'
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
      >
        <img src={icon} alt="icon" />
        <h2 className='h2 section-title'>
          {title}
          <span className='text-primary-200'>.</span>
        </h2>
      </div>
      {/* Plan List */}
      <PlanList plans={plans} />
    </section>
  )
}

export default Pricing