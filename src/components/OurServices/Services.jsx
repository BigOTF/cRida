import React from 'react'
import RenderedServices from './RenderedServices'

const Services = () => {
  return (
    <div className='bg-[#DEE7F5] md:w-[1440px] md:h-[362px] md:pt-[65px] pt-[20px] w-[428px] h-[200px] mt-[60px] md:mt-[100px] servicesBackground flex flex-col items-center md:gap-[60px] gap-[25px]'>

      <div className='w-[368px] h-[132px] p-[8px] md:w-[411px] md:h-[115px] flex flex-col gap-[8px] items-center'>

        <div className='flex items-center gap-[8px]'>
          <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
          <p className='text-[20px] font-bold leading-[27.28px] md:font-normal md:text-[24px] md:leading-[32.74px] text-[#BF5B12]'>OUR SERVICES</p>
        </div>
        <p className='text-[20px] leading-[27.28px] text-[#F5F5F5] text-center'>Explore the diverse range of transportation
        solutions offered by CRida</p>

      </div>

      <RenderedServices />

    </div>
  )
}

export default Services