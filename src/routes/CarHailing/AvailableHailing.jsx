import React, { useState } from 'react'
import HailingAvail from '../../data/HailingAvail'

const AvailableHailing = () => {
    const [availableData, setAvailableData] = useState(HailingAvail);
    const [dataCount, setDataCount] = useState(4);

    const DisplayAvailableData = () => {
        return (
            availableData.map((data) => {
                return (
                    <div key={data.id} className='flex gap-[16px] bg-[#F5F5F5] p-[16px] rounded-[8px]'>
                        <img src={data.image} alt='user image' className='w-[60px] h-[60px]'/>

                        <div className='flex flex-col gap-[16px]'>

                            <div className='flex items-center justify-between'>
                                <p className='nunito-700 text-[#070125] text-[24px] leading-[32.74px]'>{data.name}</p>
                                <div className='bg-[#BF5B12] w-[127px] h-[49px] text-center place-content-center hidden md:block'>
                                    <a className='text-[#F5F5F5] md:text-[24px] md:leading-[32.74px]'>Join Ride</a>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[8px] md:flex-row md:justify-between md:gap-[16px]'>
                                
                                <div className='flex flex-col gap-[8px]'>
                                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px]'>From</p>
                                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px]'>{data.from}</p>
                                </div>

                                <div className='flex flex-col gap-[8px]'>
                                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px]'>To</p>
                                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px]'>{data.to}</p>
                                </div>

                            </div>

                            <p className='text-[#5810BF] nunito-400 text-[20px] leading-[27.28px]'>{data.time} a.m <span className='text-[#363247]'> about 8hrs remaining</span></p>

                            <p className='nunito-700 text-[#363247] text-[20px] leading-[27.28px]'>{data.price}</p>

                            <div className='bg-[#BF5B12] w-[127px] h-[49px] text-center place-content-center md:hidden block'>
                                <a className='text-[#F5F5F5] text-[20px] leading-[27.28px]'>Join Ride</a>
                            </div>
                            
                        </div>
                    </div>
                )
            })
        ).slice(0, dataCount);
    }

    const handleMoreDisplay = () => {
        setDataCount((prev) => prev + 4);
    }

    const handleLessDisplay = () => {
        setDataCount((prev) => prev - 4);
    }

  return (
    <div className='w-full px-[10px] mt-[50px] md:mt-[100px] md:px-[100px] flex flex-col items-center gap-[16px] md:gap-[32px]'>
        <p className='text-[#BF5B12] md:text-[#070125] nunito-700 text-[24px] leading-[32.74px] md:text-[40px] md:leading-[54.56px]'>Available Rides</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[16px]'>
            <DisplayAvailableData />
        </div>

        <div className='bg-[#5810BF] w-[250px] md:w-[297px] h-[49px] rounded-[4px] p-[8px] text-center place-content-center'>
            {
                dataCount !== 8 ?  <a className='nunito-400 text-[#F5F5F5] text-[24px] leading-[32.74px] cursor-pointer' onClick={() => handleMoreDisplay()}>View All Ride</a> : <a className='nunito-400 text-[#F5F5F5] text-[24px] leading-[32.74px] cursor-pointer' onClick={() => handleLessDisplay()}>View Less Ride</a>
            }
          
        </div>
    </div>
  )
}

export default AvailableHailing