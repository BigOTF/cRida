import React from 'react'

const AboutUsText = () => {
  return (
    <div className='md:w-[710px] md:h-[417px] md:ml-[100px] p-[8px] md:flex flex-col justify-center gap-[16px] hidden'>
        <div className='flex items-center gap-[8px]'>
            <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
            <p className='md:text-[24px] md:leading-[32.74px] text-[#BF5B12]'>WHO WE ARE</p>
        </div>

        <p className='md:text-[20px] text-[#363247] md:leading-[27.28px]'>CRida is your reliable transportation partner, dedicated to ensuring safe and comfortable journeys. We create value by being proactive in maintaining quality fleet at reduced costs in order to provide efficient services by making sure we are at your service when needed. Meet our team and discover our commitment to excellence.</p>

        <a className='md:w-[189px] md:h-[49px] md:text-[24px] leading-[32.74px] p-[8px]  bg-[#5810BF] text-white rounded-lg cursor-pointer'>
            More About Us
        </a>
    </div>
  )
}

export default AboutUsText