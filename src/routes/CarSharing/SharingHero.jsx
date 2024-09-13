import React, { useState } from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const SharingHero = () => {
    const [address, setAddress] = useState('');
    const [pickUpDate, setPickUpDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');
  return (
    <div>

        {/* LARGE SCREEN VIEW */}
        <div className='carSharingHero md:h-[723px] md:flex items-center justify-end md:px-[100px] hidden'>

            <div className='flex flex-col w-full md:gap-[24px] md:w-[506px]'>
                <p className='nunito-700 text-[#F5F5F5] md:text-[48px] md:leading-[65.47px]'>No Waiting Around</p>
                <p className='nunito-400 text-[#939294] text-[20px] leading-[27.28px]'>Choose from thousands of cars available from private and professional owners near you. Book a car near you instantly, even at the last minute.</p>

                <div className='w-full flex flex-col gap-[25px] carSharingHeroPadding'>

                    <div className='flex items-center gap-[10px] bg-[#CBC3F3] p-[8px]'>
                        <label>
                            <IoLocationSharp className='text-[22px] text-[#BF5B12]'/>
                        </label>
                        <input className='w-full bg-inherit text-[#939294] p-[4px] nunito-400 md:text-[24px] md:leading-[32.74px] border-none focus:outline-none focus:ring-0'
                            type='text'
                            placeholder='Specific address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-between'>

                        <div className='flex items-center gap-[10px] bg-[#CBC3F3] p-[8px]'>
                            <label>
                                <FaCalendarDays className='text-[22px] text-[#BF5B12]'/>
                            </label>
                            <input className='w-full bg-inherit text-[#939294] p-[4px] nunito-400 md:text-[24px] md:leading-[32.74px] border-none focus:outline-none focus:ring-0'
                                type='date'
                                placeholder='Pick Up'
                                value={pickUpDate}
                                onChange={(e) => setPickUpDate(e.target.value)}
                            />
                        </div>

                        <div className='flex items-center gap-[10px] bg-[#CBC3F3] p-[8px]'>
                            <label>
                                <FaClock className='text-[22px] text-[#BF5B12]'/>
                            </label>
                            <input className='w-full bg-inherit text-[#939294] p-[4px] nunito-400 md:text-[24px] md:leading-[32.74px]'
                                type='time'
                                placeholder='Specific address'
                                value={pickUpTime}
                                onChange={(e) => setPickUpTime(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className='flex justify-between'>

                        <div className='flex items-center gap-[10px] bg-[#CBC3F3] p-[8px]'>
                            <label>
                                <FaCalendarDays className='text-[22px] text-[#BF5B12]'/>
                            </label>
                            <input className='w-full bg-inherit text-[#939294] p-[4px] nunito-400 md:text-[24px] md:leading-[32.74px] border-none focus:outline-none focus:ring-0'
                                type='date'
                                placeholder='Return'
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                            />
                        </div>

                        <div className='flex items-center gap-[10px] bg-[#CBC3F3] p-[8px]'>
                            <label>
                                <FaClock className='text-[22px] text-[#BF5B12]'/>
                            </label>
                            <input className='w-full bg-inherit text-[#939294] p-[4px] nunito-400 md:text-[24px] md:leading-[32.74px]'
                                type='time'
                                placeholder='Specific address'
                                value={returnTime}
                                onChange={(e) => setReturnTime(e.target.value)}
                            />
                        </div>

                    </div>

                    <div className='md:h-[49px] rounded-[4px] p-[8px] bg-[#5810BF] text-center'>
                        <button className='nunito-400 text-[#F5F5F5] md:text-[24px] md:leading-[32.74px] text-center'>
                            Search
                        </button>
                    </div>
                </div>

            </div>
        </div>

        {/* MOBILE SCREEN VIEW */}
        <div className='carSharingMobileHero h-[393px] md:hidden flex justify-center items-center px-[30px] pt-[110px]'>
            <div className='flex flex-col items-center gap-[16px] p-[8px]'>
                <p className='nunito-700 text-[24px] text-[#F5F5F5] leading-[32.74px]'>No Waiting Around</p>
                <p className='nunito-400 text-[20px] text-[#DEE7F5] leading-[27.28px] text-center'>Book a car near you instantly, even at the last minute.</p>

                <div className='h-[49px] w-[260px] p-[8px] rounded-[4px] text-center bg-[#5810BF]'>
                    <a className='nunito-400 text-[24px] leading-[32.74px] text-[#F5F5F5]'>
                        Find a ride
                    </a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SharingHero