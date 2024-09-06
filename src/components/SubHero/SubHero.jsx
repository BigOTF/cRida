import React from 'react'

const SubHero = () => {
  return (
    <div className='bg-[#DEE7F5] w-full'>

       <div className='bg-white w-full h-[65px] md:mx-auto md:w-[1030px] md:h-[131px] flex justify-around items-center gap-[8px] md:gap-[40px] transform md:translate-y-[-50%] translate-y-[-80px]'>
          <div className='flex flex-col md:gap-[8px] w-[62px] h-[49px] md:w-[219.5px] md:h-[83px] items-center'>
              <p className='nunito-700 text-[#070125] md:text-[32px] text-[20px] md:leading-[43.65px] leading-[27.28px]'>150+</p>
              <p className='text-[#363247] nunito-400 md:text-[20px] text-[16px] text-center md:leading-[27.28px] leading-[21.82px]'>Cars</p>
          </div>
          <div className='flex flex-col md:gap-[8px] w-[62px] h-[49px] md:w-[219.5px] md:h-[83px] items-center'>
              <p className='nunito-700 text-[#070125] md:text-[32px] text-[20px] md:leading-[43.65px] leading-[27.28px]'>1000+</p>
              <p className='text-[#363247] nunito-400 md:text-[20px] text-[16px] text-center md:leading-[27.28px] leading-[21.82px]'><span className='hidden md:inline'>Happy </span>Clients</p>
          </div>
          <div className='flex flex-col md:gap-[8px] w-[62px] h-[49px] md:w-[219.5px] md:h-[83px] items-center'>
              <p className='nunito-700 text-[#070125] md:text-[32px] text-[20px] md:leading-[43.65px] leading-[27.28px]'>5</p>
              <p className='text-[#363247] nunito-400 md:text-[20px] text-[16px] text-center md:leading-[27.28px] leading-[21.82px]'>Branches</p>
          </div>
          <div className='flex flex-col md:gap-[8px] w-[62px] h-[49px] md:w-[219.5px] md:h-[83px] items-center'>
              <p className='nunito-700 text-[#070125] md:text-[32px] text-[20px] md:leading-[43.65px] leading-[27.28px]'>50+</p>
              <p className='text-[#363247] nunito-400 md:text-[20px] text-[16px] text-center md:leading-[27.28px] leading-[21.82px]'><span className='hidden md:inline'>Professional </span>Drivers</p>
          </div>
       </div>

        
    </div>
  )
}

export default SubHero