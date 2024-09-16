import React, { useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const HailingHero = () => {
    const [pickUp, setPickUp] = useState('');
    const [dropOff, setDropOff] = useState('');
    const [time, setTime] = useState('');

  return (
    <div className='hailingHero h-[393px] md:h-[640px] flex justify-center items-center px-[10px]  md:px-[250px]'>

        <div className='flex flex-col gap-[30px] md:gap-[100px]'>

            <div className='flex flex-col items-center gap-[8px] md:gap-[16px]'>
                <p className='text-[#F5F5F5] nunito-700 text-center text-[24px] leading-[32.74px] md:text-[48px] md:leading-[65.47px]'>Give Ride, Get Ride And Make Money</p>
                <p className='text-[#939294] nunito-400 text-[20px] leading-[27.28px] text-center'>It's not just about the destination, it's about the journey, the stories you collect, and the memories you create.</p>
            </div>

            <div className='p-[10px] grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-0'>

                <div className='grid grid-cols-2 bg-[#F5F5F5]'>
                    <div className='border-r border-[#939294] flex items-center gap-[10px] p-[8px]'>
                        <label>
                            <FaLocationDot className='text-[#939294]' />
                        </label>
                        <input className='focus:outline-none bg-inherit nunito-400 text-[#070125] text-[18px] leading-[24.55px] md:text-[24px] md:leading-[32.74px] w-full'
                            type='text'
                            placeholder='Pick Up'
                            value={pickUp}
                            onChange={(e) => setPickUp(e.target.value)}
                        />
                    </div>

                    <div className='border-r border-[#939294] flex items-center gap-[10px] p-[8px]'>
                        <label>
                            <FaLocationDot className='text-[#939294]' />
                        </label>
                        <input className='focus:outline-none bg-inherit nunito-400 text-[#070125] text-[18px] leading-[24.55px] md:text-[24px] md:leading-[32.74px] w-full'
                            type='text'
                            placeholder='Drop Off'
                            value={dropOff}
                            onChange={(e) => setDropOff(e.target.value)}
                        />
                    </div>
                </div>

                <div className='grid grid-cols-2 bg-[#F5F5F5]'>
                    <div className='border-r border-[#939294] flex items-center gap-[10px] p-[8px]'>
                        <label>
                            <FaClock className='text-[#939294]' />
                        </label>
                        <input className='focus:outline-none bg-inherit nunito-400 text-[#070125] text-[18px] leading-[24.55px] md:text-[24px] md:leading-[32.74px] w-full'
                            type='time'
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />
                    </div>

                    <div className='bg-[#5810BF] place-content-center text-center'>
                        <a className='text-[#F5F5F5] text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] cursor-pointer'>Search</a>
                    </div>
                </div>

            </div>

        </div>
       
    </div>
  )
}

export default HailingHero