import React from 'react'
import AboutUsImage from './AboutUsImage'
import AboutUsText from './AboutUsText'

const AboutUs = () => {
  return (
    <div className='md:h-[484px] md:mt-[40px] w-full'>

      {/* Display on the larger screen sizes */}
      <div className='md:h-[484px] md:flex items-center mx-[100px] hidden'>

        <div className='w-[50%]'>
          <AboutUsImage />
        </div>

        <div className='w-[50%]'>
          <AboutUsText />
        </div>
        
      </div>

      {/* THIS DIV WILL ONLY DISPLAY ON THE SMALLER SCREEN SIZES */}
      <div className='mx-[30px] flex flex-col gap-[40px] md:hidden'>

        <div className='p-[8px] flex flex-col gap-[16px]'>

          <div className='flex items-center gap-[8px]'>
            <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
            <p className='text-[20px] leading-[27.28px] nunito-700 text-[#BF5B12]'>WHO WE ARE</p>
          </div>

          <div className=''>
            <p className='text-[20px] nunito-400 leading-[27.28px] text-[#363247]'>CRida is your reliable transportation partner, dedicated to ensuring safe and comfortable journeys. We create value by being proactive in maintaining quality fleet at reduced costs in order to provide efficient services by making sure we are at your service when needed.</p>
          </div>

          <div className='bg-[#5810BF] w-[190px] rounded-[8px] p-[8px] flex items-center'>
            <a className='w-[185px] nunito-400 text-[22px] leading-[32.74px] text-center text-[#F5F5F5]'>More About Us</a>
          </div>
          
        </div>

        <div>
          <AboutUsImage />
        </div>

      </div>
  
    </div>
  )
}

export default AboutUs