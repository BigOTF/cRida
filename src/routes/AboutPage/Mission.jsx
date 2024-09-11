import React from 'react'
import MissionImage from './MissionImage'

const Mission = () => {
  return (
    <div>
        {/* MOBBILE SCREN DISPLAY */}
        <div className='flex flex-col gap-[20px] md:hidden'>

        <div className='flex flex-col gap-[16px] p-[8px]'>

            <div className='flex items-center gap-[8px]'>
                <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
                <p className='nunito-700 text-[24px] leading-[32.74px] text-[#BF5B12]'>OUR MISSION</p>
            </div>

            <p className='nunito-700 text-[20px] leading-[27.28px] text-[#070125]'>Mission Statement</p>

            <p className='text-[20px] nunito-400 text-[#363247] leading-[27.28px]'>At CRida, our mission is simple yet profound: to redefine the transportation experience. We strive to exceed expectations by providing reliable, safe, and convenient travel solutions to our customers. Every journey with CRida is guided by our commitment to excellence, ensuring that each passenger feels valued, comfortable, and satisfied with our service. With a focus on innovation, customer satisfaction, and sustainability, we aim to set new standards in the transportation industry and create lasting positive impacts on the communities we serve.</p>
        </div>

        <div className=''>
            <MissionImage />
        </div>

        </div>

        {/* LARGE SCREEN DISPLAY */}
        <div className='md:flex items-center gap-[120px] hidden'>

            <div className='flex flex-col gap-[16px] p-[8px]'>

                <div className='flex flex-col gap-[16px]'>

                    <div className='flex items-center gap-[8px]'>
                        <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
                        <p className='text-[24px] nunito-400 leading-[32.74px] text-[#BF5B12]'>OUR MISSION</p>
                    </div>

                    <p className='nunito-700 text-[40px] leading-[54.56px] text-[#070125]'>Mission Statement</p>

                    <p className='text-[20px] nunito-400 text-[#363247] leading-[27.28px]'>At CRida, our mission is simple yet profound: to redefine the transportation experience. We strive to exceed expectations by providing reliable, safe, and convenient travel solutions to our customers. Every journey with CRida is guided by our commitment to excellence, ensuring that each passenger feels valued, comfortable, and satisfied with our service. With a focus on innovation, customer satisfaction, and sustainability, we aim to set new standards in the transportation industry and create lasting positive impacts on the communities we serve.</p>
                </div>
            </div>

            <div>
                <MissionImage />
            </div>
        </div>
    </div>
  )
}

export default Mission