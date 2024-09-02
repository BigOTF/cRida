import React from 'react'
import AboutUsImage from './AboutUsImage'
import AboutUsText from './AboutUsText'

const AboutUs = () => {
  return (
    <div className='md:w-[1440px] md:h-[484px] w-[428px] md:pt-[20px] flex flex-col md:flex-row justify-between bg-[#DEE7F5]'>
        
      <div className='h-[340px] p-[8px] ml-[30px] flex flex-col justify-center gap-[16px] md:hidden'>
          <div className='flex items-center gap-[8px]'>
              <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
              <p className='text-[20px] leading-[27.28px] font-bold text-[#BF5B12]'>WHO WE ARE</p>
          </div>

          <p className='text-[20px] leading-[27.28px] text-[#363247]'>CRida is your reliable transportation partner, dedicated to ensuring safe and comfortable journeys. We create value by being proactive in maintaining quality fleet at reduced costs in order to provide efficient services by making sure we are at your service when needed. Meet our team and discover our commitment to excellence.</p>

          <a className='w-[201px] h-[49px] md:text-[24px] text-[20px] leading-[32.74px] p-[8px]  bg-[#5810BF] text-white rounded-lg cursor-pointer text-center'>
              More About Us
          </a>
      </div>

      <AboutUsImage />
      <AboutUsText />
    </div>
  )
}

export default AboutUs