import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const CustomerRemarks = ({ handleNext, currentSlides }) => {
    
    const DisplayUserComments = () => {
        return currentSlides.map((data, index) => {
            
            return (
                <div className={index === 0 ? 'first' : ''}>
                    <div key={data.id} className='flex flex-col gap-[16px] bg-[#F5F5F5] h-full justify-between'>
                    
                        <div className='p-[16px] flex flex-col gap-[16px]'>

                            <div className='flex items-center gap-[10px]'>

                                <div>
                                    <img src={data.image} alt='customer display picture'/>
                                </div>

                                <div className='flex flex-col gap-[4px]'>
                                    <p className='nunito-700 text-[20px] leading-[27.28px] text-[#070125]'>Benson Jonas</p>
                                    <p className='nunito-400 text-[16px] leading-[21.82px] text-[#79748d]'>CEO Benson Enterprise</p>
                                    <div className='flex'>
                                        <FaStar className='w-[18px] h-[18px] text-[#BF5B12]'/> 
                                        <FaStar className='w-[18px] h-[18px] text-[#BF5B12]'/> 
                                        <FaStar className='w-[18px] h-[18px] text-[#BF5B12]'/> 
                                        <FaStar className='w-[18px] h-[18px] text-[#BF5B12]'/> 
                                    </div>
                                </div>

                            </div>

                            <div className=''>
                                <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px]'>''{data.comment}''</p>
                            </div>

                        </div>

                    <   div className='h-[44px] bg-[#070125]'></div>
                    </div>
                </div>
              
            )
        })
    }
  return (
    <div className='flex flex-col md:flex-row items-center'>

        <div className='flex flex-col gap-[16px] md:flex-row md:gap-[14px]'>
            <DisplayUserComments />
        </div>
        
        <div className='hidden md:block'>
            <IoIosArrowForward className='bg-[#070125] rounded-[50%] text-[30px] text-[#F5F5F5] cursor-pointer' onClick={() => handleNext()}/>
        </div>
    </div>
  )
}
/*  */
export default CustomerRemarks