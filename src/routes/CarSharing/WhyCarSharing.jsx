import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { RiSteering2Fill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";

const WhyCarSharing = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-[20px] gap-[40px] md:mt-[40px] md:gap-[64px] pb-[40px] md:pb-[60px]'>

        <div className='flex flex-col justify-center items-center md:w-[716px] mx-[10px]'>
            <p className='nunito-700 text-[#BF5B12] text-[24px] leading-[32.74px] md:text-[40px] md:leading-[54.56px]'>Why CRida Co-Ride</p>
            <p className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] text-center hidden md:inline'>It's the best way to drive. With co-ride, you don't have to buy or lease a car. Our cars are available around every street corner of Abuja. Whether you need to rent a car for 2 minutes or 2 weeks, you can get going with CRida.</p>

            <p className='md:hidden text-[20px] leading-[27.28px] text-[#363247] nunito-400 text-center'>CRida's co-ride puts cars at every corner, ready to rent for minutes or weeks. Get going instantly in Abuja.</p>
        </div>

        <div className='flex flex-col md:flex-row gap-[20px] px-[10px] md:mx-[100px]'>

            <div className='flex flex-col gap-[8px] p-[8px] items-center'>
                <div className='bg-[#070125] w-[64px] h-[64px] rounded-[50%] flex items-center justify-center'>
                    <FaMoneyCheckAlt className='text-white text-[40px]'/>
                </div>
                <p className='nunito-700 text-[24px] leading-[32.74px] text-[#070125]'>Flexible Rentals</p>
                <p className='nunito-400 text-[20px] leading-[27.28px] text-[#363247] text-center'>Our rates are all-inclusive and are as flexible as pay-per-minute. No monthly fees.</p>
            </div>

            <div className='flex flex-col gap-[8px] p-[8px] items-center'>
                <div className='bg-[#070125] w-[64px] h-[64px] rounded-[50%] flex items-center justify-center'>
                    <FaCarSide className='text-white text-[40px]'/>
                </div>
                <p className='nunito-700 text-[24px] leading-[32.74px] text-[#070125]'>Convenient delivery</p>
                <p className='nunito-400 text-[20px] leading-[27.28px] text-[#363247] text-center'>Car will be delivered to you wherever you are. All you need is to hop in and drive.</p>
            </div>

            <div className='flex flex-col gap-[8px] p-[8px] items-center'>
                <div className='bg-[#070125] w-[64px] h-[64px] rounded-[50%] flex items-center justify-center'>
                    <RiSteering2Fill className='text-white text-[40px]'/>
                </div>
                <p className='nunito-700 text-[24px] leading-[32.74px] text-[#070125]'>Drive on-demand</p>
                <p className='nunito-400 text-[20px] leading-[27.28px] text-[#363247] text-center'>No waiting in line at the counter. (No need to  search for your keys!) Just book and go.</p>
            </div>

        </div>
    </div>
  )
}

export default WhyCarSharing