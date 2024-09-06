import React, { useState } from 'react'
import CustomerRemarks from './CustomerRemarks'
import TestimonialData from '../../data/TestimonialData'

const Testimonial = () => {
    const [comment, setComment] = useState(TestimonialData);
    const [startIndex, setStartIndex] = useState(0)

    const slidesToShow = 4;

    const handleNext = () => {
        return setStartIndex((prev) => (prev + 1)  % TestimonialData.length)
    }

    const currentSlides = TestimonialData.slice(startIndex, startIndex + slidesToShow);

    if (currentSlides.length < slidesToShow) {
        currentSlides.push(...TestimonialData.slice(0, slidesToShow - currentSlides.length));
    }

   return (
    <div className='mt-[50px] md:mt-[100px] mx-[30px] md:w-[1260px] md:h-[628px] md:ml-[100px] flex flex-col justify-center items-center'>
        
        <div className='md:w-[549px] md:h-[128px] flex flex-col gap-[16px] justify-center items-center'>
            <div className='md:w-[549px] md:h-[85px] flex flex-col items-center gap-[8px]'>
                <p className='w-[135px] h-[27px] text-[20px] font-bold leading-[27.28px] md:font-normal md:w-[549px] md:h-[33px] md:text-[24px] md:leading-[32.74px] text-center text-[#BF5B12]'>TESTIMONIAL</p>
                <p className='w-[368px] h-[33px] mx-[30px] text-[24px] leading-[32.74px] md:mx-0 md:w-[549px] md:h-[44px] font-bold md:text-[32px] md:leading-[43.65px] md:text-center text-[#070125]'>What Our Customers Are Saying</p>
            </div>

            <p className='w-[311px] h-[50px] text-[18px] leading-[24.55px] md:ml-0 md:w-[549px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-center text-[#363247]'>Here are some of our customers saying about our services.</p>

        </div>

        <div className='md:mt-[30px] mt-[35px]'>
            <CustomerRemarks handleNext={handleNext} currentSlides={currentSlides} />
        </div>

        <div className='md:w-[80px] md:h-[10px] md:mt-[20px] flex justify-between'>
            {TestimonialData.map((_, index) => (
                <div className={index === startIndex ? 'md:w-[10px] md:h-[10px] rounded-[50%] bg-[#070125]' : 'md:w-[10px] md:h-[10px] rounded-[50%] bg-[#939294]'} key={index}>
        
                </div>
            ))}
        </div>

    </div>
  )
}

export default Testimonial