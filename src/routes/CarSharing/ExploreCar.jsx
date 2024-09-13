import React, { useState, useEffect } from 'react'
import CarSharingExplore from '../../data/CarSharingExplore'
import { IoIosArrowForward } from "react-icons/io";

const ExploreCar = () => {
    const [exploreData, setExploreData] = useState(CarSharingExplore);
    const [startIndex, setStartIndex] = useState(0)

    const slidesToShow = 6

    const handleNext = () => {
        return setStartIndex((prev) => (prev + 1)  % exploreData.length)
    }

    const currentSlides = exploreData.slice(startIndex, startIndex + slidesToShow);

    if (currentSlides.length < slidesToShow) {
        currentSlides.push(...exploreData.slice(0, slidesToShow - currentSlides.length));
    }

    const DisplayExploreCars = () => {
        return currentSlides.map((data, index) => {
            
            return (
                <div className={index === 0 ? 'first' : ''}>
                    <div key={data.id} className='bg-[#F5F5F5] pb-[16px] flex flex-col gap-[16px] rounded-b-[4px]'>
                        <img src={data.image} alt='car image' />
                        <p className='text-[#070125] nunito-400 text-[20px] leading-[27.28px] text-center'>{data.carName}</p>
                    </div>
                </div>
            )
        })
    }


  return (
    <div className='w-full mt-[60px] md:mt-[120px] flex flex-col px-[10px] gap-[20px] md:gap-[25px] md:px-[100px]'>

        <p className='text-[#363247] nunito-700 text-[24px] leading-[32.74px] md:text-[32px] md:leading-[43.65px]'>Explore Cars Near You</p>

        <div className='flex flex-col md:flex-row md:items-center justify-between'>
            <div className='flex flex-col gap-[16px] md:flex-row md:gap-[20px]'>
                <DisplayExploreCars />
            </div>
            
            <div className='hidden w-[35px] h-[30px] bg-[#070125] rounded-[50%] md:flex items-center justify-center'>
                <IoIosArrowForward className='text-[20px] text-[#F5F5F5] cursor-pointer' onClick={() => handleNext()}/>
            </div>
        </div>

      
    </div>
  )
}

export default ExploreCar