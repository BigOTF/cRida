import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const CustomerRemarks = ({ handleNext, currentSlides }) => {
    
    const DisplayUserComments = () => {
        return currentSlides.map((data, index) => {
            
            return (
                <div className={index === 0 ? 'first' : ''}>
                    <div key={data.id} className='w-[272px] h-[426px] md:w-[295px] md:h-[426px] flex flex-col gap-[16px] bg-[#F5F5F5]'>
                    
                        <div className='w-[272px] h-[366px] md:w-[295px] md:h-[366px] p-[16px] flex flex-col gap-[16px]'>
                            <div className='w-[240px] h-[75px] md:w-[263px] md:h-[75px] flex gap-[8px]'>
                                <div className='w-[50px] h-[50px]'>
                                    <img src={data.image} alt='customer display picture'/>
                                </div>
                                <div className='w-[182px] h-[75px] md:w-[205px] md:h-[75px] flex flex-col gap-[4px]'>
                                    <p className='w-[182px] h-[27px] md:w-[205px] md:h-[27px] font-bold text-[20px] leading-[27.28px] text-[#070125]'>Benson Jonas</p>
                                    <p className='w-[182px] h-[22px] md:w-[205px] md:h-[22px] text-[16px] leading-[21.82px] text-[#79748d]'>CEO Benson Enterprise</p>
                                    <div className='w-[78px] h-[18px] flex'>
                                        <FaStar className='w-[18px] h-[18px] text-[#BF5B12]'/> 
                                        <FaStar className='w-[18px] h-[18px] text-[#BF5B12]'/> 
                                        <FaStar className='w-[18px] h-[18px] text-[#BF5B12]'/> 
                                        <FaStar className='w-[18px] h-[18px] text-[#BF5B12]'/> 
                                    </div>
                                </div>

                            </div>

                            <div className='w-[240px] h-[243px] md:w-[263px] md:h-[243px]'>
                                <p className='text-[#363247] text-[20px] leading-[27.28px]'>''{data.comment}''</p>
                            </div>

                        </div>

                    <   div className='w-[272px] h-[44px] md:w-[295px] md:h-[44px] bg-[#070125]'></div>
                    </div>
                </div>
              
            )
        })
    }
  return (
    <div className='md:w-[1260px] md:h-[426px] flex flex-col justify-center items-center gap-[16px] md:gap-0 md:flex-row md:items-center md:justify-between'>
        <DisplayUserComments />
        <div className='hidden md:w-[40px] md:h-[40px] transform md:translate-x-[-20px] bg-[#070125] rounded-[50%] md:flex items-center justify-center'>
            <IoIosArrowForward className='md:w-[20px] md:h-[20px] text-[#F5F5F5] cursor-pointer' onClick={() => handleNext()}/>
        </div>
    </div>
  )
}
/*  */
export default CustomerRemarks