import React from 'react'

// Import Data
import { workouts } from '../data'

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/navigation'
import '../workoutSlider.css'

// Import Required Modules
import { Navigation } from 'swiper'

const WorkoutSlider = () => {

  // Destructure Workout Data
  const { programs } = workouts

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className='workoutSlider'
    >
      {
        programs.map((program, index) => {

          // Destructure Programs Data
          const { image, name } = program

          return (
            <SwiperSlide
              className='max-w-[320px] max-h-[320px] relative'
              key={index}
            >
              <img
                className='w-full h-full object-cover'
                src={image}
                alt="img"
              />
              <div className='absolute left-[20px] bottom-[20px] bg-white h-[26px] px-[14px] flex items-center rounded-[1px]'>
                <div className='font-primary font-semibold text-sm text-neutral-500'>
                  {name}
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper >
  )
}

export default WorkoutSlider