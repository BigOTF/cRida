import React from 'react'
import driverImage from '/hailingDrivers.png'
import riderImage from '/hailingRiders.png'

const WhyHailing = () => {
  return (
    <div className='border-4 border-red-500 w-full px-[10px] mt-[50px] md:px-[100px] md:mt-[100px] flex flex-col gap-[40px] md:gap-[64px]'>

      {/* Drivers */}
      <div className='flex flex-col gap-[10px] md:flex-row md:justify-between md:items-center'>

        <div className='flex flex-col p-[8px] gap-[24px] md:gap-[32px]'>

          <div className='flex flex-col gap-[8px]'>
            <p className='nunito-700 text-[#070125] text-[24px] leading-[32.74px]'>For Drivers</p>
            <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px]'>Make Everyday Payday</p>
          </div>
          
          <ul className='flex flex-col gap-[16px]'>

            <div className='flex flex-col gap-[8px]'>
              <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Set Your Own Hours</li>
              <p className='nunito-400 text-[#363247] text-[20px] leading-[27.28px]'>Decide when and how often you you drive</p>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Earn As You Drive</li>
              <p className='nunito-400 text-[#363247] text-[20px] leading-[27.28px]'>Money will be deposited into your account weekly</p>
            </div>

            <div className='flex flex-col gap-[8px]'>
              <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Get Support Everything</li>
              <p className='nunito-400 text-[#363247] text-[20px] leading-[27.28px]'>Need our support? we are here for you at all time</p>
            </div>
                          
          </ul>

          <div className='bg-[#5810BF] w-[230px] h-[49px] rounded-[8px] p-[8px] text-center place-content-center'>
            <a className='text-[#F5F5F5] nunito-400 text-[24px] leading-[32.74px]'>Apply to drive</a>
          </div>

        </div>

        <div>
          <img src={driverImage} alt='driver image'/>
        </div>

      </div>

      {/* Riders */}
      <div className='flex flex-col gap-[10px] md:flex-row md:justify-between md:items-center'>

        {/* Will display on the larger screen */}
        <div className='flex flex-col p-[8px] gap-[24px] md:gap-[32px] md:hidden'>

          <div className='flex flex-col gap-[8px]'>
            <p className='nunito-700 text-[#070125] text-[24px] leading-[32.74px]'>For Riders</p>
            <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px]'>Request a ride at any time and any day</p>
          </div>
          
          <ul className='flex flex-col gap-[16px]'>
            <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Request a ride within few minutes</li>
            <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Schedule your ride in advance</li>
            <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Pay via card or transfer</li>
            <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Review your driver</li>                        
          </ul>

          <div className='bg-[#5810BF] w-[230px] h-[49px] rounded-[8px] p-[8px] text-center place-content-center'>
            <a className='text-[#F5F5F5] nunito-400 text-[24px] leading-[32.74px]'>Get a ride</a>
          </div>

        </div>

        <div>
          <img src={riderImage} alt='rider image'/>
        </div>

        {/* WIll display on the larger screen */}
        <div className='md:flex flex-col p-[8px] gap-[24px] md:gap-[32px] hidden'>

          <div className='flex flex-col gap-[8px]'>
            <p className='nunito-700 text-[#070125] text-[24px] leading-[32.74px]'>For Riders</p>
            <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px]'>Request a ride at any time and any day</p>
          </div>

          <ul className='flex flex-col gap-[16px]'>
            <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Request a ride within few minutes</li>
            <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Schedule your ride in advance</li>
            <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Pay via card or transfer</li>
            <li className='list-decimal list-inside nunito-700 text-[#363247] text-[24px] leading-[32.74px]'>Review your driver</li>                        
          </ul>

          <div className='bg-[#5810BF] w-[230px] h-[49px] rounded-[8px] p-[8px] text-center place-content-center'>
            <a className='text-[#F5F5F5] nunito-400 text-[24px] leading-[32.74px]'>Get a ride</a>
          </div>

        </div>
      </div>

    </div>
  )
}

export default WhyHailing