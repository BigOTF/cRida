import React from 'react'
import ExploreCars from './ExploreCars'

const Explore = () => {
  return (
    <div className='mx-[30px] mt-[570px] w-[368px] md:mt-[270px] md:w-[1240px] md:h-[1437px] md:mx-[100px]'>
        
        <div className='h-[257px] p-[8px] md:h-[133px] flex flex-col gap-[16px] md:flex-row md:items-end md:justify-between md:gap-0'>
            <div className='w-[352px] md:w-[421px] flex flex-col gap-[8px]'>
                <p className='text-[24px] leading-[32.74px] md:text-[32px] font-bold md:leading-[43.65px] text-[#070125]'>Explore Our Vehicles</p>
                <p className='text-[20px] text-[#363247] leading-[27.28px] hidden md:inline'>Discover your ideal ride with CRida's diverse fleet. From sleek sedans to spacious SUVs and luxurious vans.</p>
                <p className='text-[20px] text-[#363247] leading-[27.28px] md:hidden'>Discover your ideal ride with CRida's diverse fleet. From sleek sedans to spacious SUVs and luxurious vans, we have the perfect vehicle for your journey. Choose CRida for comfort.</p>
            </div>

            <div className='w-[164px] h-[49px] md:w-[186px] rounded-[8px] p-[8px] bg-[#5810BF] text-center'>
                <a className='text-[24px] leading-[32.74px] text-[#F5F5F5] text-center'>See All Cars</a>
            </div>
        </div>

        <ExploreCars />
    </div>
  )
}

export default Explore