import React, { useState } from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const Subscribe = () => {
    const [email, setEmail] = useState('');

  return (
    <div className='mt-[50px] w-[368px] h-[329px] pt-[25px] md:pt-[40px] mx-[30px] md:mt-[150px] md:w-[1030px] md:h-[462px] md:mx-[205px] flex flex-col md:gap-[24px] bg-[#CBC3F3] md:py-[48px] md:px-[108px]'>
        <div className='w-[368px] md:w-[814px] md:h-[64px] md:p-[10px] text-center md:text-start'>
            <p className='w-[345.94px] h-[54px] text-[20px] leading-[27.28px] md:w-[743px] md:h-[44px] font-bold md:text-[32px] md:leading-[43.65px] text-[#070125]'>Subscribe for exclusive offers and deals!</p>
        </div>

        <div className='md:w-[814px] md:h-[278px] flex flex-col md:gap-[24px]'>
            
            <div className='flex items-center justify-center md:items-end md:justify-end '>
                <div className='subscribeImage w-[87.24px] h-[100px] md:w-[135px] md:h-[132px]'></div>
            </div>

            <div className='md:w-[814px] md:h-[122px] flex flex-col gap-[16px] md:gap-[24px] p-[10px]'>
                <input className='w-[345.94px] h-[43px] text-[20px] leading-[27.28px] md:w-[814px] md:h-[49px] md:text-[24px] md:leading-[32.74px] rounded-[4px] border border-[#363247] p-[8px] text-[#939294] bg-inherit '
                    type='email'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className='bg-[#5810BF] w-[345.94px] h-[49px] md:w-[814px] md:h-[49px] rounded-[4px] p-[8px] text-center'>
                    <button className='text-[24px] leading-[32.74px] text-center text-[#F5F5F5]'>Sign Me Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe