import React from 'react'

const RenderedServices = () => {
  return (
    <div className='flex flex-wrap md:flex-nowrap gap-3 justify-between md:gap-[16px]'>

        <div className='flex flex-col rounded-[4px] w-[48%]'>

            <div className='bg-[#5810BF] servicesPadding flex items-center justify-center'>
                <p className='text-[#F5F5F5] nunito-700 text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-center'>Car Rentals</p>
            </div>

            <div className='bg-white servicesPadding2 h-full'>
                <p className='text-[20px] nunito-400 leading-[27.28px] text-[#363247] hidden md:inline'>Experience the freedom of exploring your destination at your own pace with CRida's car rental service. Choose from a variety of vehicles to suit your preferences and enjoy</p>

                <p className='text-[20px] leading-[27.28px] nunito-400 text-[#363247] md:hidden'>Experience the freedom of exploring your destination at your own pace with CRida's car rental service.</p>
            </div>

        </div>

        <div className='flex flex-col rounded-[4px] w-[48%]'>

            <div className='bg-[#5810BF] servicesPadding flex items-center justify-center'>
                <p className='text-[#F5F5F5] nunito-700 text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-center'>Car Sales</p>
            </div>

            <div className='bg-white servicesPadding2 h-full'>
                <p className='text-[20px] nunito-400 leading-[27.28px] text-[#363247] md:inline hidden'>Experience the freedom of exploring your destination at your own pace with CRida's car rental service. Choose from a variety of vehicles to suit your preferences and enjoy</p>

                <p className='text-[20px] leading-[27.28px] nunito-400 text-[#363247] md:hidden'>You can now afford your dream car with our flexible and affordable car financing option
                </p>
            </div>

        </div>

        <div className='flex flex-col rounded-[4px] w-[48%]'>

            <div className='bg-[#5810BF] servicesPadding flex items-center justify-center'>
                <p className='text-[#F5F5F5] nunito-700 text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-center'>Car Sharing</p>
            </div>

            <div className='bg-white servicesPadding2 h-full'>
                <p className='text-[20px] nunito-400 leading-[27.28px] text-[#363247] hidden md:inline'>Planning a group trip or corporate event? CRida's bus rental service has you covered. From spacious coaches to comfortable mini busses, we provide reliable transportation</p>

                <p className='text-[20px] leading-[27.28px] nunito-400 text-[#363247] md:hidden'>CRida's co-ride puts cars at every corner, ready to rent for minutes or weeks. Get going instantly in Abuja</p>
            </div>

        </div>

        <div className='flex flex-col rounded-[4px] w-[48%]'>

            <div className='bg-[#5810BF] servicesPadding flex items-center justify-center'>
                <p className='text-[#F5F5F5] nunito-700 text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-center'>Ride Hailing</p>
            </div>

            <div className='bg-white servicesPadding2 h-full'>
                <p className='text-[20px] nunito-400 leading-[27.28px] text-[#363247] hidden md:inline'>Take control of your travel itinerary with CRida's rent and self-drive options. Whether you're traveling for business or leisure, our fleet of well-maintained vehicles is available for</p>

                <p className='text-[20px] leading-[27.28px] nunito-400 text-[#363247] md:hidden'>Ride-share and enjoy a friendly atmosphere with passengers heading in the same direction. Choose comfort</p>
            </div>

        </div>

    </div>
  )
}

export default RenderedServices