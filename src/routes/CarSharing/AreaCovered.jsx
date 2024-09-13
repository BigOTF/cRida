import React from 'react'

const AreaCovered = () => {
  return (
    <div>
        <div className='areaCoveredImage w-full h-[651px] mt-[50px] px-[10px] md:h-[634px] md:mt-[100px] md:px-[100px] flex flex-col items-center justify-center gap-[30px] md:gap-[70px]'>
            <p className='text-[#BF5B12] nunito-700 text-[24px] leading-[32.74px] md:text-[40px] md:leading-[54.56px] text-center'>Areas that You Are Covered</p>

            {/* LARGE SCREEN DISPLAY */}
            <div className='md:flex gap-[140px] hidden'>

                <div className='flex flex-col md:gap-[40px]'>

                    <div className='flex flex-col gap-[16px]'>
                        <p className='text-[#F5F5F5] nunito-700 md:text-[40px] md:leading-[54.56px]'>Roadside assistance</p>
                        <p className='text-[#939294] nunito-400 text-[20px] leading-[27.28px]'>Car trouble? Our roadside assistance gets you back on the road fast, so your carpool keeps moving.</p>
                    </div>
                    
                    <div className='flex flex-col gap-[16px]'>
                        <p className='text-[#F5F5F5] nunito-700 md:text-[40px] md:leading-[54.56px]'>Vehicle Protection</p>
                        <p className='text-[#939294] nunito-400 text-[20px] leading-[27.28px]'>Peace of mind, shared miles. Vehicle protection included in every carpool.</p>
                    </div>

                </div>

                <div className='flex flex-col md:gap-[40px]'>

                    <div className='flex flex-col gap-[16px]'>
                        <p className='text-[#F5F5F5] nunito-700 md:text-[40px] md:leading-[54.56px]'>Liability Insurance</p>
                        <p className='text-[#939294] nunito-400 text-[20px] leading-[27.28px]'>Shared rides, shared responsibility: We've got you covered with industry-leading carpool liability insurance.</p>
                    </div>
                    
                    <div className='flex flex-col gap-[16px]'>
                        <p className='text-[#F5F5F5] nunito-700 md:text-[40px] md:leading-[54.56px]'>Vehicle Protection</p>
                        <p className='text-[#939294] nunito-400 text-[20px] leading-[27.28px]'>Peace of mind, shared miles. Vehicle protection included in every carpool.</p>
                    </div>

                </div>

            </div>

            {/* MOBILE SCREEN DISPLAY */}
            <div className='md:hidden flex flex-col gap-[40px]'>

                <div className='flex flex-col gap-[16px]'>
                    <p className='text-[#F5F5F5] nunito-700 text-[24px] leading-[32.74px] md:text-[40px] md:leading-[54.56px]'>Roadside assistance</p>
                    <p className='text-[#939294] nunito-400 text-[20px] leading-[27.28px]'>Car trouble? Our roadside assistance gets you back on the road fast, so your carpool keeps moving.</p>
                </div>
                
                <div className='flex flex-col gap-[16px]'>
                    <p className='text-[#F5F5F5] nunito-700 text-[24px] leading-[32.74px] md:text-[40px] md:leading-[54.56px]'>Vehicle Protection</p>
                    <p className='text-[#939294] nunito-400 text-[20px] leading-[27.28px]'>Peace of mind, shared miles. Vehicle protection included in every carpool.</p>
                </div>

                <div className='flex flex-col gap-[16px]'>
                    <p className='text-[#F5F5F5] nunito-700 text-[24px] leading-[32.74px] md:text-[40px] md:leading-[54.56px]'>Liability Insurance</p>
                    <p className='text-[#939294] nunito-400 text-[20px] leading-[27.28px]'>Shared rides, shared responsibility: We've got you covered with industry-leading carpool liability insurance.</p>
                </div>

            </div>


            <div className='bg-[#5810BF] w-[295px] h-[49px] rounded-[4px] p-[8px] text-center'>
                <a className='text-[#F5F5F5] nunito-700 text-[24px] leading-[32.74px] text-center'>List My Cars</a>
            </div>
        </div>
    </div>
  )
}

export default AreaCovered