import React from 'react'
import { IoMdClock } from "react-icons/io";
import { FaHandHoldingUsd, FaCalendarAlt } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { PiSeatbeltFill } from "react-icons/pi";

const ChooseUsSideDetails = () => {
  return (
    <div className='w-[322px] md:w-[715px] md:h-[462px] ml-[53px] md:ml-0 flex flex-col md:flex-row justify-between'>

        <div className='flex flex-col justify-between'>
            
            <div className='w-[322px] h-[165px] md:w-[295px] md:h-[138px] p-[8px] flex flex-col gap-[8px]'>
                <div className='flex items-center gap-[10px]'>
                    <IoMdClock className='w-[21.16px] h-[22.77px] md:w-[28.21px] md:h-[30.37px] text-[#BF5B12]'/>
                    <p className='text-[24px] font-bold text-[#070125] leading-[32.74px]'>24/7 Support</p>
                </div>
                <p className='text-[20px] leading-[27.28px] text-[#363247]'>Our round-the-clock customer support team is here to help, anytime, anywhere.</p>
            </div>

            <div className='w-[322px] h-[165px] md:w-[295px] md:h-[138px] p-[8px] flex flex-col gap-[8px]'>
                <div className='flex items-center gap-[10px]'>
                    <FaShuffle className='w-[21.16px] h-[22.77px] md:w-[28.21px] md:h-[30.37px] text-[#BF5B12]'/>
                    <p className='text-[24px] font-bold text-[#070125] leading-[32.74px]'>Flexible</p>
                </div>
                <p className='text-[20px] leading-[27.28px] text-[#363247]'>Tailored solutions to suit your unique travel needs. Enjoy the flexibility you deserve.</p>
            </div>

            <div className='w-[322px] h-[165px] md:w-[295px] md:h-[138px] p-[8px] flex flex-col gap-[8px]'>
                <div className='flex items-center gap-[10px]'>
                    <SiAdguard className='w-[21.16px] h-[22.77px] md:w-[28.21px] md:h-[30.37px] text-[#BF5B12]'/>
                    <p className='text-[24px] font-bold text-[#070125] leading-[32.74px]'>Insurance</p>
                </div>
                <p className='text-[20px] leading-[27.28px] text-[#363247]'>Travel with confidence as all our vehicles are fully insured for your safety.</p>
            </div>
          
        </div>

        <div className='flex flex-col justify-between'>

            <div className='w-[322px] h-[165px] md:w-[400px] md:h-[138px] p-[8px] flex flex-col gap-[8px]'>
                <div className='flex items-center gap-[10px]'>
                    <FaHandHoldingUsd className='w-[21.16px] h-[22.77px] md:w-[28.21px] md:h-[30.37px] text-[#BF5B12]'/>
                    <p className='text-[24px] font-bold text-[#070125] leading-[32.74px]'>Affordable Pricing</p>
                </div>
                <p className='text-[20px] leading-[27.28px] text-[#363247]'>Enjoy competitive rates without compromising on quality. Get the best value for your money with CRida.</p>
            </div>

            <div className='w-[322px] h-[165px] md:w-[400px] md:h-[138px] p-[8px] flex flex-col gap-[8px]'>
                <div className='flex items-center gap-[10px]'>
                    <FaCalendarAlt className='w-[21.16px] h-[22.77px] md:w-[28.21px] md:h-[30.37px] text-[#BF5B12]'/>
                    <p className='text-[24px] font-bold text-[#070125] leading-[32.74px]'>Seamless Reservation</p>
                </div>
                <p className='text-[20px] leading-[27.28px] text-[#363247]'>Book your ride in seconds with our user-friendly platform. Enjoy a hassle-free booking experience with CRida.</p>
            </div>

            <div className='w-[322px] h-[165px] md:w-[400px] md:h-[138px] p-[8px] flex flex-col gap-[8px]'>
                <div className='flex items-center gap-[10px]'>
                    <PiSeatbeltFill className='w-[21.16px] h-[22.77px] md:w-[28.21px] md:h-[30.37px] text-[#BF5B12]'/>
                    <p className='text-[24px] font-bold text-[#070125] leading-[32.74px]'>Clean and Safe Cars</p>
                </div>
                <p className='text-[20px] leading-[27.28px] text-[#363247]'>Hygienic and well-maintained vehicles ensure a safe and comfortable journey with CRida.</p>
            </div>

        </div>

       

       


    </div>
  )
}

export default ChooseUsSideDetails