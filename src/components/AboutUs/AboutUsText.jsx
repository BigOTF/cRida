import React from 'react'

const AboutUsText = () => {
  return (
    <div className='md:flex flex-col justify-center gap-[16px]'>

      <div className='md:flex flex-col gap-[16px] md:p-[8px]'>

        <div className='md:h-[211px] flex flex-col gap-[16px]'>

          <div className='flex items-center gap-[8px]'>
            <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
            <p className='md:text-[24px] nunito-400 md:leading-[32.74px] text-[#BF5B12]'>WHO WE ARE</p>
          </div>

          <p className='md:text-[20px] nunito-400 text-[#363247] md:leading-[27.28px]'>CRida is your reliable transportation partner, dedicated to ensuring safe and comfortable journeys. We create value by being proactive in maintaining quality fleet at reduced costs in order to provide efficient services by making sure we are at your service when needed. Meet our team and discover our commitment to excellence.</p>
        </div>

        <div className='md:w-[189px] md:h-[49px] rounded-[8px] p-[8px] bg-[#5810BF]'>
          <a href='/about' className='md:w-[173px] md:h-[33px] nunito-400 md:text-[24px] md:leading-[32.74px] text-[#F5F5F5] cursor-pointer'>More About Us</a>
        </div>

      </div>
       
    </div>
  )
}

export default AboutUsText