import React from 'react'
import ExploreCars from './ExploreCars'

const Explore = () => {
  return (
    <div className='w-full md:mt-[70px] mt-[550px] px-[30px] md:px-[100px] flex flex-col gap-[16px]'>
        
      <div className='p-[8px] flex flex-col gap-[16px] md:flex-row md:items-center md:justify-between md:gap-0'>
        <div className='md:w-[40%] flex flex-col gap-[8px]'>
          <p className='text-[24px] leading-[32.74px] md:text-[32px] nunito-700 md:leading-[43.65px] text-[#070125]'>Explore Our Vehicles</p>
          <p className='text-[20px] nunito-400 text-[#363247] leading-[27.28px] hidden md:inline'>Discover your ideal ride with CRida's diverse fleet. From sleek sedans to spacious SUVs and luxurious vans.</p>
          <p className='text-[20px] nunito-400 text-[#363247] leading-[27.28px] md:hidden'>Discover your ideal ride with CRida's diverse fleet. From sleek sedans to spacious SUVs and luxurious vans, we have the perfect vehicle for your journey. Choose CRida for comfort.</p>
        </div>

        <div className='w-[164px] h-[49px] md:w-[186px] rounded-[8px] p-[8px] bg-[#5810BF] text-center'>
          <a className='text-[20px] md:text-[24px] nunito-400 leading-[32.74px] text-[#F5F5F5] text-center cursor-pointer'>See All Cars</a>
        </div>
      </div>

      <div>
        <ExploreCars />
      </div>
       
    </div>
  )
}

export default Explore