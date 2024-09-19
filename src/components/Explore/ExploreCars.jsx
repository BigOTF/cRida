import React, { useState } from 'react'
import { SiCoronaengine } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";

import vehicle from '../../data/Vehicles';

const ExploreCars = () => {
    const [vehicleData, setVehicleData] = useState(vehicle);

    const CarProductDisplay = () => {
        return (
            vehicleData.map((data) => {
                return (
                    <div key={data.id} className='flex flex-col gap-[16px] bg-[#F5F5F5]'>

                        <div>
                            <img src={data.image} alt='vehicle image' className='w-full h-[264px] object-cover' />
                        </div>

                        <div className='flex flex-col h-full p-[16px] gap-[12px] md:gap-[25px] md:p-[12px]'>
                            <div className='flex flex-col gap-[8px] md:gap-[16px] h-full'>
                                <p className='nunito-700 text-[20px] text-wrap leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-[#070125]'>{data.name}</p>
                                <p className='text-[20px] leading-[27.28px] md:text-[21px] md:leading-[32.74px] text-[#070125] nunito-600'>{data.price}</p>

                                <div className='flex gap-[16px]'>
                                    <div className='flex flex-col items-center gap-[8px]'>
                                        <IoMdPerson className='text-[#5810BF] w-[13.84px] h-[15.43px]' />
                                        <p className='text-[#363247] text-[16px] nunito-400 leading-[21.82px] text-center'>{data.seater}</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-[8px]'>
                                        <SiCoronaengine className='text-[#5810BF] md:w-[13.84px] md:h-[15.43px]' />
                                        <p className='text-[#363247] text-[16px] nunito-400 leading-[21.82px] text-center'>{data.engine}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-[#5810BF] w-[189px] h-[43px] md:h-[49px] rounded-[8px] p-[8px] text-center place-content-center'>
                                <a className='cursor-pointer nunito-400 text-[#F5F5F5] text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px]'>Book Now</a>
                            </div>
                        </div>
                    </div>
                )
            }).slice(6, 12)
        )
    }

  return (
    <div className='grid grid-cols-1 gap-[14px] md:grid-cols-3 md:gap-[20px]'>
        <CarProductDisplay />
    </div>
  )
}

export default ExploreCars