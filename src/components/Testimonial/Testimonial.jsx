import React from 'react'
import CustomerRemarks from './CustomerRemarks'

const Testimonial = () => {
  return (
    <div className='mt-[50px] md:mt-[100px] ml-[30px] md:w-[1260px] md:h-[628px] md:ml-[100px] flex flex-col items-center'>
        
        <div className='md:w-[549px] md:h-[128px] flex flex-col gap-[16px]'>
            <div className='md:w-[549px] md:h-[85px] flex flex-col items-center gap-[8px]'>
                <p className='w-[135px] h-[27px] text-[20px] font-bold leading-[27.28px] md:font-normal md:w-[549px] md:h-[33px] md:text-[24px] md:leading-[32.74px] text-center text-[#BF5B12]'>TESTIMONIAL</p>
                <p className='w-[368px] h-[33px] mx-[30px] text-[24px] leading-[32.74px] md:mx-0 md:w-[549px] md:h-[44px] font-bold md:text-[32px] md:leading-[43.65px] md:text-center text-[#070125]'>What Our Customers Are Saying</p>
            </div>

            <p className='w-[311px] h-[50px] ml-[59px] text-[18px] leading-[24.55px] md:ml-0 md:w-[549px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-center text-[#363247]'>Here are some of our customers saying about our services.</p>

        </div>

        <div className='md:mt-[30px] mt-[35px]'>
            <CustomerRemarks />
        </div>


    </div>
  )
}

export default Testimonial