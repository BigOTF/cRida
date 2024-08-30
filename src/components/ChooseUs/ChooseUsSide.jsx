import React from 'react'
import ChooseUsImage from '../../../public/ChooseUsImage.png'

const ChooseUsSide = () => {
  return (
    <div className='ml-[30px] w-[368px] md:w-[420px] md:h-[515px] md:ml-[100px] flex flex-col justify-between'>

        <div className='w-[368px] h-[159px] md:w-[420px] md:h-[138px] p-[8px] flex flex-col gap-[8px]'>
            <div className='flex items-center gap-[8px]'>
                <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
                <p className='md:text-[24px] leading-[32.74px] text-[#FAA037]'>WHY CHOOSE US</p>
            </div>

            <p className='md:text-[20px] leading-[27.28px] text-[#363247]'>Choose CRida for unbeatable convenience, reliability, and affordability. Experience top-notch service with every ride.</p>
        </div>
        

        <div className='w-[368px] h-[395px] md:w-[420px] md:h-[353px] relative'>
            <div className='w-[344px] h-[369px] md:w-[390px] md:h-[332px] chooseRadius bg-[#070125]'></div>
            <img src={ChooseUsImage} alt='choose us image' className='w-[342px] h-[366px] md:w-[390px] md:h-[332px] rounded-[4px] absolute top-[15px] left-[20px] bg-cover bg-no-repeat' />
        </div>

    </div>
  )
}

export default ChooseUsSide