import React from 'react'

const SubHero = () => {
  return (
    <div className='bg-white w-[368px] h-[65px] md:w-[1030px] md:h-[131px] flex mx-auto md:flex-row justify-around items-center gap-[8px] md:gap-[40px] transform translate-y-[-50%]'>
        <div className='flex flex-col md:gap-[8px] w-[62px] h-[49px] md:w-[219.5px] md:h-[83px] items-center'>
            <p className='font-bold text-[#070125] md:text-[32px] text-[20px] md:leading-[43.65px] leading-[27.28px]'>150+</p>
            <p className='text-[#363247] md:text-[20px] text-[16px] md:leading-[27.28px] leading-[21.82px]'>Cars</p>
        </div>
        <div className='flex flex-col md:gap-[8px] w-[62px] h-[49px] md:w-[219.5px] md:h-[83px] items-center'>
            <p className='font-bold text-[#070125] md:text-[32px] text-[20px] md:leading-[43.65px] leading-[27.28px]'>1000+</p>
            <p className='text-[#363247] md:text-[20px] text-[16px] md:leading-[27.28px] leading-[21.82px]'>Happy clients</p>
        </div>
        <div className='flex flex-col md:gap-[8px] w-[62px] h-[49px] md:w-[219.5px] md:h-[83px] items-center'>
            <p className='font-bold text-[#070125] md:text-[32px] text-[20px] md:leading-[43.65px] leading-[27.28px]'>6</p>
            <p className='text-[#363247] md:text-[20px] text-[16px] md:leading-[27.28px] leading-[21.82px]'>Branches</p>
        </div>
        <div className='flex flex-col md:gap-[8px] w-[62px] h-[49px] md:w-[219.5px] md:h-[83px] items-center'>
            <p className='font-bold text-[#070125] md:text-[32px] text-[20px] md:leading-[43.65px] leading-[27.28px]'>50+</p>
            <p className='text-[#363247] md:text-[20px] text-[16px] md:leading-[27.28px] leading-[21.82px]'>Professional drivers</p>
        </div>
    </div>
  )
}

export default SubHero