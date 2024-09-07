import React from 'react'

const HeroSide = () => {
  return (
    <div className='text-white flex flex-col gap-[16px] w-full mx-[30px] md:mx-0 mt-[40px] md:mt-0 md:w-[525px] md:h-[331px]'>
        <div className='flex items-center gap-[8px]'>
          <div className='w-[60px] border-[#5810BF] border-[3px]'></div>
          <p className='md:text-[24px] text-[20px] nunito-400'>ENJOY YOUR RIDE</p>
        </div>

        <p className='md:text-[48px] nunito-700 md:leading-[65.47px] text-[32px] leading-[43.65px]'>Feel the Difference With CRida Rentals</p>

        <div className='flex items-center gap-[16px]'>
          <div className='w-[60px] border-[#5810BF] border-[3px] transform rotate-90'></div>
          <p className='md:text-[20px] nunito-400 text-[#939294] leading-[27.28px]'>Safety measures for all trips In order to better protect our customers and our bus partners, we have implemented new measures in line with the guidelines from NCDC</p>
        </div>
    </div>
  )
}

export default HeroSide