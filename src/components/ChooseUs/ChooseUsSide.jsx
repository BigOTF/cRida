import React from 'react'

const ChooseUsSide = () => {
  return (
    <div className='flex flex-col gap-[20px]'>

        <div className='p-[8px] flex flex-col gap-[8px]'>
            <div className='flex items-center gap-[8px]'>
                <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
                <p className='md:text-[24px] text-[20px] leading-[27.28px] nunito-700 md:nunito-400 md:leading-[32.74px] text-[#BF5B12]'>WHY CHOOSE US</p>
            </div>

            <p className='text-[20px] nunito-400 leading-[27.28px] text-[#363247]'>Choose CRida for unbeatable convenience, reliability, and affordability. Experience top-notch service with every ride.</p>
        </div>
        

        <div className='relative flex'>
            <div className='h-[369px] md:h-[332px] w-full chooseRadius bg-[#070125]'></div>
            <div className='chooseUsBackground w-full h-[366px] md:h-[332px] rounded-[4px] absolute md:top-[15px] md:left-[20px] top-[10px] left-[6px]'></div>
        </div>

    </div>
  )
}

export default ChooseUsSide