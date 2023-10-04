import React from 'react'

// Import Data
import { workouts } from '../data'

// Import Components
import WorkoutSlider from './WorkoutSlider';

const Workouts = () => {

  // Destructure Workout Data
  const { title, icon } = workouts

  return (
    <section className='section'>
      {/* Section Title */}
      <div
        data-aos='fade-up'
        data-aos-delay='200'
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
      >
        <img src={icon} alt="icon" />
        <h2 className='h2 section-title'>
          {title}
          <span className='text-primary-200'>.</span>
        </h2>
      </div>
      {/* Slider */}
      <div
        data-aos='fade-up'
        data-aos-delay='300'
      >
        <WorkoutSlider />
      </div>
    </section>
  )
}

export default Workouts