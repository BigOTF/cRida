import React, { useState } from 'react'
import carData from '../../data/CarData'

import { FaCarSide } from "react-icons/fa";
import { IoMdPerson, IoMdSnow } from "react-icons/io";

const FeaturedCars = () => {
    const [trendingData, setTrending] = useState(carData);
    const [dataCount, setDataCount] = useState(8);

    const [price, setPrice] = useState('')
    const [bodyType, setBodyType] = useState('')
    const [model, setModel] = useState('')
    const [condition, setCondition] = useState('')
    const [fuelType, setFuelType] = useState('')

    const DisplayTrendingData = () => {
        return (
            trendingData.map((data) => {
                return (
                    <div key={data.id} className='flex flex-col gap-[8px] pb-[24px] bg-[#F5F5F5]'>
                        
                        <div>
                            <img src={data.image} className='w-full h-[229px] object-cover'/>
                        </div>

                        <div className='flex flex-col gap-[32px] p-[8px]'>

                            <div className='flex flex-col gap-[16px]'>
                                <p className='text-[#070125] nunito-700 text-[20px] leading-[27.28px]'>{data.name}</p>
                                <p className='text-[#BF5B12] nunito-700 text-[20px] leading-[27.28px]'>{data.price}</p>

                                <div className='flex flex-col gap-[8px]'>

                                    <div className='flex items-center gap-[40px]'>

                                        <div className='flex flex-col items-center gap-[4px]'>
                                            <FaCarSide className='text-[#5810BF] w-[19px] h-[18px]'/>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>{data.door}</p>
                                        </div>
                                        
                                        <div className='flex flex-col items-center gap-[4px]'>
                                            <IoMdSnow className='text-[#5810BF] w-[19px] h-[18px]'/>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>A/C</p>
                                        </div>

                                        <div className='flex flex-col items-center gap-[4px]'>
                                            <IoMdPerson className='text-[#5810BF] w-[19px] h-[18px]'/>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>{data.seat}</p>
                                        </div>

                                    </div>

                                    <div className='flex items-center gap-[8px]'>

                                        <div className='bg-[#DEE7F5] h-[33px] rounded-[4px] p-[4px] w-full'>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>{data.type}</p>
                                        </div>

                                        <div className='bg-[#DEE7F5] h-[33px] rounded-[4px] p-[4px] w-full'>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>{data.millage}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className='bg-[#5810BF] w-[190px] h-[49px] rounded-[8px] p-[8px] text-center place-content-center'>
                                <a className='text-[#F5F5F5] nunito-400 text-[24px] leading-[32.74px]'>Check Out</a>
                            </div>

                        </div>

                    </div>
                )
            })
        ).slice(0, 4)
    }
    const DisplayCarsData = () => {
        return (
            trendingData.map((data) => {
                return (
                    <div key={data.id} className='flex flex-col gap-[8px] pb-[24px] bg-[#F5F5F5]'>
                        
                        <div>
                            <img src={data.image} className='w-full h-[229px] object-cover'/>
                        </div>

                        <div className='flex flex-col gap-[32px] p-[8px] h-full'>

                            <div className='flex flex-col gap-[16px] h-full'>
                                <p className='text-[#070125] nunito-700 text-[20px] leading-[27.28px]'>{data.name}</p>
                                <p className='text-[#BF5B12] nunito-700 text-[20px] leading-[27.28px]'>{data.price}</p>

                                <div className='flex flex-col gap-[8px]'>

                                    <div className='flex items-center gap-[40px]'>

                                        <div className='flex flex-col items-center gap-[4px]'>
                                            <FaCarSide className='text-[#5810BF] w-[19px] h-[18px]'/>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>{data.door}</p>
                                        </div>
                                        
                                        <div className='flex flex-col items-center gap-[4px]'>
                                            <IoMdSnow className='text-[#5810BF] w-[19px] h-[18px]'/>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>A/C</p>
                                        </div>

                                        <div className='flex flex-col items-center gap-[4px]'>
                                            <IoMdPerson className='text-[#5810BF] w-[19px] h-[18px]'/>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>{data.seat}</p>
                                        </div>

                                    </div>

                                    <div className='flex items-center gap-[8px]'>

                                        <div className='bg-[#DEE7F5] h-[33px] rounded-[4px] p-[4px] w-full'>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>{data.type}</p>
                                        </div>

                                        <div className='bg-[#DEE7F5] h-[33px] rounded-[4px] p-[4px] w-full'>
                                            <p className='text-[#363247] nunito-400 text-[18px] leading-[24.55px] text-center'>{data.millage}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className='bg-[#5810BF] w-[190px] h-[49px] rounded-[8px] p-[8px] text-center place-content-center'>
                                <a className='text-[#F5F5F5] nunito-400 text-[24px] leading-[32.74px]'>Check Out</a>
                            </div>

                        </div>

                    </div>
                )
            })
        ).slice(4, dataCount)
    }

    const handleMoreDisplay = () => {
        setDataCount((prev) => prev + 4);
    }
    const handleLessDisplay = () => {
        setDataCount((prev) => prev - 8);
    }

  return (

    <div className='w-full px-[10px] md:px-[100px] mt-[50px] flex flex-col gap-[30px] md:gap-[50px]'>

        <div className='w-full grid grid-cols-3 gap-[10px] md:grid-cols-6 md:gap-[20px]'>
            <input className='focus:outline-none bg-inherit nunito-400 rounded-[4px] p-[8px] text-[#363247] text-[18px] md:text-[24px] md:leading-[32.74px] border border-[#363247] w-full'
                type='text'
                placeholder='Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input className='focus:outline-none bg-inherit nunito-400 rounded-[4px] p-[8px] text-[#363247] text-[18px] md:text-[24px] md:leading-[32.74px] border border-[#363247] w-full'
                type='text'
                placeholder='Body type'
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
            />

            <input className='focus:outline-none bg-inherit nunito-400 rounded-[4px] p-[8px] text-[#363247] text-[18px] md:text-[24px] md:leading-[32.74px] border border-[#363247] w-full'
                type='text'
                placeholder='Model'
                value={model}
                onChange={(e) => setModel(e.target.value)}
            />

            <input className='focus:outline-none bg-inherit nunito-400 rounded-[4px] p-[8px] text-[#363247] text-[18px] md:text-[24px] md:leading-[32.74px] border border-[#363247] w-full'
                type='text'
                placeholder='Condition'
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
            />

            <input className='focus:outline-none bg-inherit nunito-400 rounded-[4px] p-[8px] text-[#363247] text-[18px] md:text-[24px] md:leading-[32.74px] border border-[#363247] w-full'
                type='text'
                placeholder='Fuel type'
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
            />

            <div className='w-full bg-[#CBC3F3] rounded-[4px] p-[8px] text-center place-content-center'>
                <p className='nunito-400 text-[#363247] text-[18px] md:text-[24px] md:leading-[32.74px] cursor-pointer'>Clear Filters</p>
            </div>
        </div>

        <div className='flex flex-col gap-[20px]'>

            <div className='flex flex-col gap-[10px]'>
                <p className='nunito-700 text-[#070125] text-[24px] md:text-[32px] md:leading-[43.65px]'>Featured Cars</p>
                <div className='flex items-center gap-[16px] md:gap-[24px]'>
                    <p className='nunito-400 text-[#BF5B12] underline underline-offset-[12px] text-[18px] md:text-[24px] md:leading-[32.74px'>Trending</p>
                    <p className='nunito-400 text-[#070125] text-[18px] md:text-[24px] md:leading-[32.74px'>Popular</p>
                    <p className='nunito-400 text-[#070125] text-[18px] md:text-[24px] md:leading-[32.74px'>Upcoming</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-[20px]'>
                <DisplayTrendingData />
            </div>
            
        </div>
        
        <div className='flex flex-col gap-[20px]'>

            <div className='flex items-center gap-[16px] md:gap-[24px]'>
                <p className='nunito-400 text-[#BF5B12] underline underline-offset-[12px] text-[18px] md:text-[24px] md:leading-[32.74px'>New Cars</p>
                <p className='nunito-400 text-[#070125] text-[18px] md:text-[24px] md:leading-[32.74px'>Foreign Used</p>
                <p className='nunito-400 text-[#070125] text-[18px] md:text-[24px] md:leading-[32.74px'>Local Used</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-[20px]'>
                <DisplayCarsData />
            </div>

            <div className='flex items-center justify-center'>
                <div className='bg-[#5810BF] w-[250px] md:w-[297px] h-[49px] rounded-[4px] p-[8px] text-center place-content-center'>
                    {
                        dataCount !== 16 ?  <a className='nunito-400 text-[#F5F5F5] text-[24px] leading-[32.74px] cursor-pointer' onClick={() => handleMoreDisplay()}>View More Cars</a> : <a className='nunito-400 text-[#F5F5F5] text-[24px] leading-[32.74px] cursor-pointer' onClick={() => handleLessDisplay()}>View Less Cars</a>
                    }
                
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default FeaturedCars