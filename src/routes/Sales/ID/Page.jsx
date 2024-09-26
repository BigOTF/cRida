import React from 'react'
import { useParams } from 'react-router-dom'
import carData from '../../../data/CarData';
import Footer from '../../../components/Footer/Footer';

import image1 from '/honda1.png'
import image2 from '/honda2.png'
import image3 from '/honda3.png'
import image4 from '/honda4.png'
import image5 from '/honda5.png'
import image6 from '/honda6.png'
import image7 from '/honda7.png'
import image8 from '/honda8.png'
import image9 from '/honda9.png'
import image10 from '/honda10.png'
import image11 from '/honda11.png'
import image12 from '/honda12.png'

const Page = () => {
    const { id } = useParams();
    const product = carData.find((data) => data.id === Number(id));

  return (
    <div className='w-full bg-[#DEE7F5]'>
        <div className='pageIDHero h-[393px] md:h-[800px]'></div>

        <div className='flex flex-col gap-[20px] mt-[50px] px-[10px] md:gap-[32px] md:mt-[80px] md:px-[100px]'>

            <p className='nunito-700 text-[#070125] text-[24px] md:text-[32px] md:leading-[43.65px]'>{product.name}</p>

            <div className='grid grid-cols-2 gap-[16px] md:grid-cols-6 md:gap-[20px]'>
                <img src={image1} alt='side view'/>
                <img src={image2} alt='front view'/>
                <img src={image3} alt='back view'/>
                <img src={image4} alt='tire view'/>
                <img src={image5} alt='engine view'/>
                <img src={image6} alt='seat view'/>
                <img src={image7} alt='sterring view'/>
                <img src={image8} alt='gear view'/>
                <img src={image9} alt='front mirror view'/>
                <img src={image10} alt='side view'/>
                <img src={image11} alt='side view'/>
                <img src={image12} alt='door view'/>
            </div>
        </div>

        <div className='flex flex-col gap-[40px] md:w-[771px] mt-[50px] px-[10px] md:px-[100px]'>

            <p className='text-[#BF5B12] text-[24px] nunito-700 md:text-[32px] md:leading-[43.65px]'>Specifications</p>

            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                <div className='flex items-center gap-[50px] md:gap-[200px]'>
                    <p className='text-[#070125] nunito-700 text-[24px] leading-[32.74px] w-full'>Engine type</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>Gas</p>
                </div>
                
                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Transmission</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>Continuously Variable-speed automatic</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Drive type</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>Front wheel drive</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Cylinders</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>Inline 4</p>
                </div>

            </div>

            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                <p className='text-[#070125] nunito-700 text-[24px] leading-[32.74px]'>Fuel & MPG</p>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Fuel type</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>Regular unleaded</p>
                </div>
                
                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>EPA city/highway MPG</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>28/34 MPG</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>EPA combined MPG</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>30 MPG</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Range in miles (city/hwy)</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>392.0/476.0 mi</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Fuel tank capacity</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>14.0 gal</p>
                </div>

            </div>

            <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                <p className='text-[#070125] nunito-700 text-[24px] leading-[32.74px]'>Engine</p>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Base engine size</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>1.5 L</p>
                </div>
                
                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Horsepower</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>190 hp @ 5,600 rpm</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Torque</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>179 lb-ft @ 5,000 rpm</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Valves</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>16</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Cam type</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>Double overhead cam (DOHC)</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Valve timing</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>Variable</p>
                </div>

                <div className='flex items-center'>
                    <p className='text-[#363247] nunito-700 text-[20px] leading-[27.28px] w-full'>Direct injection</p>
                    <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] w-full text-right'>Standard</p>
                </div>

            </div>

            <div className='flex items-center gap-[24px]'>
                <div className='bg-[#5810BF] h-[49px] w-[198px] md:w-[210px] rounded-[4px] p-[8px] text-center place-content-center'>
                    <p className='text-[#F5F5F5] nunito-400 text-[24px] leading-[32.74px]'>Car Finance</p>
                </div>

                <div className='border-[#5810BF] border-[2px] h-[49px] w-[198px] md:w-[210px] rounded-[4px] p-[8px] text-center place-content-center'>
                    <p className='text-[#5810BF] nunito-400 text-[24px] leading-[32.74px]'>Pay Outright</p>
                </div>
            </div>

        </div>

        <Footer />
    </div> 
  )
}

export default Page