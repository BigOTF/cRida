import React, { useState } from 'react'
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

const Subscribe = () => {
    const [email, setEmail] = useState('');

  return (
    <div className='w-full md:flex justify-center items-center mt-[80px] md:mt-[100px]'>

        <div className='flex flex-col md:gap-[24px] bg-[#CBC3F3] py-5 md:py-[48px] md:px-[108px]'>

            <div className='md:p-[10px] text-center md:text-start'>
                <p className='text-[20px] nunito-700 leading-[27.28px] md:text-[32px] md:leading-[43.65px] text-[#070125]'>Subscribe for exclusive offers and deals!</p>
            </div>

            <div className='flex flex-col md:gap-[24px]'>
                
                <div className='flex items-center justify-center md:items-end md:justify-end'>
                    <img src={'/subscribeImage2.png'} className='w-[87.24px] h-[100px] md:w-[135px] md:h-[132px] object-cover'/>
                </div>

                <div className='flex flex-col gap-[16px] md:gap-[24px] px-4 md:px-0'>
                    <input className='text-[20px] nunito-400 text-black leading-[27.28px] md:text-[24px] md:leading-[32.74px] rounded-[4px] border border-[#363247] p-[8px] bg-inherit'
                        type='email'
                        placeholder='Email Address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className='bg-[#5810BF] h-[49px] rounded-[4px] p-[8px] text-center'>
                        <button className='text-[24px] nunito-400 leading-[32.74px] text-center text-[#F5F5F5]'>Sign Me Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Subscribe