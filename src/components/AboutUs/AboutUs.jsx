import React from 'react'
import AboutUsImage from './AboutUsImage'
import AboutUsText from './AboutUsText'

const AboutUs = () => {
  return (
    <div className='md:w-[1440px] md:h-[484px] w-[428px] md:pt-[20px] flex flex-col md:flex-row justify-between bg-[#DEE7F5]'>

      {/* THIS DIV WILL ONLY DISPLAY ON THE SNALLER SCREEN SIZES */}
      <div className='w-[368px] h-[340px] mx-[30px] p-[8px] flex flex-col gap-[16px] md:hidden'>

        <div className='w-[352px] h-[258px] flex flex-col gap-[16px]'>
          <div className='flex items-center gap-[8px] w-[352px] h-[27px]'>
              <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
              <p className='text-[20px] leading-[27.28px] font-bold text-[#BF5B12]'>WHO WE ARE</p>
          </div>

          <div className='w-[352px] h-[218px]'>
            <p className='text-[20px] leading-[27.28px] text-[#363247]'>CRida is your reliable transportation partner, dedicated to ensuring safe and comfortable journeys. We create value by being proactive in maintaining quality fleet at reduced costs in order to provide efficient services by making sure we are at your service when needed.</p>
          </div>

        </div>

        <div className='bg-[#5810BF] w-[201px] h-[49px] rounded-[8px] p-[8px]'>
            <a className='w-[185px] h-[33px] text-[24px] leading-[32.74px] text-center text-[#F5F5F5]'>More About Us</a>
        </div>
      </div>
  

      <AboutUsImage />
      <AboutUsText />
    </div>
  )
}

export default AboutUs