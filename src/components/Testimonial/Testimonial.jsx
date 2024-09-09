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
    <div className='w-full flex flex-col gap-[20px] items-center mt-[50px] md:mt-[100px]'>
        
        <div className='flex flex-col gap-[16px] justify-center items-center'>
            <div className='flex flex-col items-center text-center gap-[8px]'>
                <p className='text-[20px] nunito-700 leading-[27.28px] md:nunito-400 md:text-[24px] md:leading-[32.74px] text-center text-[#BF5B12]'>TESTIMONIAL</p>
                <p className='text-[24px] nunito-700 leading-[32.74px] md:text-[32px] md:leading-[43.65px] text-[#070125]'>What Our Customers Are Saying</p>
            </div>

            <p className='text-[18px] text-center nunito-400 leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#363247]'>Here are some of our customers saying about our services.</p>

        </div>

        <div className='md:mx-[100px] mx-[30px]'>
            <CustomerRemarks handleNext={handleNext} currentSlides={currentSlides} />
        </div>

        <div className='hidden md:flex justify-between gap-[8px]'>
            {TestimonialData.map((_, index) => (
                <div className={index === startIndex ? 'md:w-[10px] md:h-[10px] rounded-[50%] bg-[#070125]' : 'md:w-[10px] md:h-[10px] rounded-[50%] bg-[#939294]'} key={index}>
        
                </div>
            ))}
        </div>

    </div>
  )
}

export default Testimonial