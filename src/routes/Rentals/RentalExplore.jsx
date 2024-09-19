import React, { useState } from 'react'
import vehicle from '../../data/Vehicles';
import { SiCoronaengine } from "react-icons/si";
import { IoMdPerson } from "react-icons/io";

const RentalExplore = () => {
    const [sortBy, setSortBy] = useState('price');
    const [vehicleData, setVehicleData] = useState(vehicle);
    const [dataCount, setDataCount] = useState(4);

    const VehicleProductDisplay = () => {
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
            }).slice(0, dataCount)
         
        )
    }

    const handleMoreDisplay = () => {
        setDataCount((prev) => prev + 4);
    }
    const handleLessDisplay = () => {
        setDataCount((prev) => prev - 12);
    }


  return (
    <div className='w-full mt-[20px] px-[10px] md:px-[100px] flex flex-col gap-[20px]'>

        <div className='bg-[#F5F5F5] rounded-[4px] flex gap-[8px] p-[8px] md:px-[16px] md:py-[8px]'>

            <div className='w-full flex md:gap-[20px] md:px-[8px] md:py-[5px]'>
                <p className='nunito-700 w-full text-[16px] leading-[21.82px] md:text-[24px] md:leading-[32.74px] text-[#363247] place-content-center'>Sort By</p>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='cursor-pointer bg-inherit focus:outline-none border px-[3px] md:px-[5px] nunito-400 text-[16px] leading-[21.82px] md:text-[20px] md:leading-[27.28px] text-[#363247] w-full'>
                    <option value='price'>Price</option>
                    <option value='type'>Type</option>
                    <option value='model'>Model</option>
                    <option value='engine'>Engine</option>
                </select>
            </div>

            <div className='bg-[#5810BF] h-[43px] w-[120px] md:h-[49px] md:w-[140px] rounded-[4px] p-[8px] text-center place-content-center'>
                <a className='nunito-400 text-[#F5F5F5] text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] cursor-pointer'>Search</a>
            </div>
        </div>

        <div className='grid grid-cols-1 gap-[14px] md:grid-cols-4 md:gap-[16px]'>
            <VehicleProductDisplay />
        </div>

        <div className='flex items-center justify-center'>
            <div className='bg-[#5810BF] w-[250px] md:w-[297px] h-[49px] rounded-[4px] p-[8px] text-center place-content-center'>
                {
                    dataCount !== 16 ?  <a className='nunito-400 text-[#F5F5F5] text-[24px] leading-[32.74px] cursor-pointer' onClick={() => handleMoreDisplay()}>View More Cars</a> : <a className='nunito-400 text-[#F5F5F5] text-[24px] leading-[32.74px] cursor-pointer' onClick={() => handleLessDisplay()}>View Less Cars</a>
                }
            
            </div>
        </div>

    </div>
  )
}

export default RentalExplore