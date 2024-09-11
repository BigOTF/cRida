import React from 'react'
import AboutUsImage from './AboutUsImage'

const WhoWeAre = () => {
  return (
    <div>
        {/* MOBBILE SCREN DISPLAY */}
        <div className='flex flex-col gap-[20px] md:hidden'>

            <div className='flex flex-col gap-[16px] p-[8px]'>

                <div className='flex items-center gap-[8px]'>
                    <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
                    <p className='nunito-700 text-[24px] leading-[32.74px] text-[#BF5B12]'>WHO WE ARE</p>
                </div>

                <p className='nunito-700 text-[20px] leading-[27.28px] text-[#070125]'>About Us</p>

                <p className='text-[20px] nunito-400 text-[#363247] leading-[27.28px]'>CRida is your trusted travel companion. With a team dedicated to excellence, we offer reliable and personalized transportation services. Whether for business or leisure, solo or group travel, we prioritize your comfort and safety. Choose CRida for a seamless journey from start to finish.</p>
            </div>

            <div>
                <AboutUsImage />
            </div>

        </div>

        {/* LARGE SCREEN DISPLAY */}
        <div className='md:flex items-center gap-[120px] hidden'>

            <div>
                <AboutUsImage />
            </div>

            <div className='flex flex-col gap-[16px] p-[8px]'>

                <div className='flex flex-col gap-[16px]'>

                    <div className='flex items-center gap-[8px]'>
                        <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
                        <p className='text-[24px] nunito-400 leading-[32.74px] text-[#BF5B12]'>WHO WE ARE</p>
                    </div>

                    <p className='nunito-700 text-[40px] leading-[54.56px] text-[#070125]'>About Us</p>

                    <p className='text-[20px] nunito-400 text-[#363247] leading-[27.28px]'>CRida is your trusted travel companion. With a team dedicated to excellence, we offer reliable and personalized transportation services. Whether for business or leisure, solo or group travel, we prioritize your comfort and safety. Choose CRida for a seamless journey from start to finish.</p>
                </div>

            </div>
        </div>

    </div>
  )
}

export default WhoWeAre