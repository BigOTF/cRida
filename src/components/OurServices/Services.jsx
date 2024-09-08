import React from 'react'
import RenderedServices from './RenderedServices'

const Services = () => {
  return (
    <div className='md:h-[548px] mt-[70px] md:mt-0 w-full relative'>


      <div className='h-[200px] px-[30px] pt-[15px] md:pt-[50px] md:h-[362px] servicesBackground flex justify-center items-start'>
        <div className='md:w-[411px] flex flex-col gap-[8px] items-center'>

          <div className='flex items-center gap-[8px]'>
            <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
            <p className='text-[20px] nunito-700 leading-[27.28px] md:nunito-400 md:text-[24px] md:leading-[32.74px] text-[#BF5B12]'>OUR SERVICES</p>
          </div>
          
          <p className='text-[20px] nunito-400 leading-[27.28px] text-[#F5F5F5] text-center'>Explore the diverse range of transportation
          solutions offered by CRida</p>

        </div>
      </div>

      <div className='absolute top-[90%] md:top-[45%] md:mx-[164px] mx-[30px]'>
        <RenderedServices />
      </div> 

    </div>
  )
}

export default Services