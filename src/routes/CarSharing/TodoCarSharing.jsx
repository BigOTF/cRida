import React from 'react'

const TodoCarSharing = () => {
  return (
    <div className='w-full mt-[50px] flex flex-col gap-[30px] px-[10px] md:gap-[100px] md:px-[100px]'>

        <div className='flex flex-col gap-[30px] md:flex-row md:justify-between md:items-center'>

            <div className='md:hidden'>
                <img src={'/carSharingOwners.png'} alt='image representing the car owners'/>
            </div>

            <div className='flex flex-col gap-[12px]'>
                <p className='nunito-700 text-[#070125] text-[24px] leading-[32.74px]'>For Car Owners</p>
                <p className='nunito-400 text-[#363247] text-[20px] leading-[27.28px]'>Don't let your car sit idle. Earn with car leasing.</p>

                <ul className='flex flex-col gap-[8px]'>
                    <li className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] list-inside list-decimal'>Sign Up</li>
                    <li className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] list-inside list-decimal'>Share Your Car</li>
                    <li className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] list-inside list-decimal'>Customize your Car’s Availability</li>
                    <li className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] list-inside list-decimal'>Sit Back And Start Earning</li>
                </ul>

                <div className='w-[230px] h-[49px] rounded-[8px] p-[8px] bg-[#5810BF] text-center'>
                    <a className='nunito-400 text-[#F5F5F5] text-[24px] leading-[32.74px] text-center'>List My Cars</a>
                </div>
            </div>

            <div className='hidden md:block'>
                <img src={'/carSharingOwners.png'} alt='image representing the car owners'/>
            </div>
        </div>

        <div className='flex flex-col gap-[30px] md:flex-row md:justify-between md:items-center'>

            <div>
                <img src={'/carSharingRiders.png'} alt='image representing the car owners'/>
            </div>

            <div className='flex flex-col gap-[12px]'>
                <p className='nunito-700 text-[#070125] text-[24px] leading-[32.74px]'>For Riders</p>
                <p className='nunito-400 text-[#363247] text-[20px] leading-[27.28px]'>Save Big on Rentals: Affordable options for every budget.</p>

                <ul className='flex flex-col gap-[8px]'>
                    <li className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] list-inside list-decimal'>Sign Up</li>
                    <li className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] list-inside list-decimal'>Find The Car Of Your Choice</li>
                    <li className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] list-inside list-decimal'>Make Payment via card or transfer</li>
                    <li className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] list-inside list-decimal'>Drive Safe And Have Fun</li>
                    <li className='nunito-400 text-[#363247] text-[20px] leading-[27.28px] list-inside list-decimal'>Return the car in the same location you picked it up from</li>
                </ul>

                <div className='w-[230px] h-[49px] rounded-[8px] p-[8px] bg-[#5810BF] text-center'>
                    <a className='nunito-400 text-[#F5F5F5] text-[24px] leading-[32.74px] text-center'>Book a Car</a>
                </div>
            </div>

        </div>


    </div>
  )
}

export default TodoCarSharing