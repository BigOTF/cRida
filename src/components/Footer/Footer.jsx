import React from 'react'
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='mt-[50px] pt-[30px] md:mt-[100px] md:py-[80px] py-[50px] bg-[#070125] w-full flex flex-col gap-[24px] md:gap-[32px]'>

        <div className='flex flex-col gap-[30px] md:grid grid-cols-4 md:gap-[20px] md:mx-[100px] mx-[30px]'>

            <div className='p-[8px] hidden md:flex flex-col gap-[16px]'>
                <p className='nunito-700 md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>About Us</p>
                <p className='text-[20px] leading-[27.28px] text-[#F5F5F5]'>Discover CRida's commitment to excellence and learn more about our mission to redefine transportation services.</p>
            </div>
            
            {/* THIS WILL SHOW ONLY ON THE MOBILE VIEW */}
            <div className='p-[8px] flex flex-col gap-[16px] md:hidden'>
                <p className='nunito-700 text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Contact us</p>
                <ul className='flex flex-col gap-[12px]'>
                    <div className='flex items-center gap-[12px]'>
                        <FaPhone className='text-[#F5F5F5] text-[17px]' />
                        <li className='nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>+234-825470000</li>
                    </div>
                    <div className='flex items-center gap-[12px]'>
                        <FaLocationDot className='text-[#F5F5F5] text-[17px]' />
                        <li className='nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>No 84. Kwame Nkurumah Crescent, Asoroko Abuja</li>
                    </div>
                    <div className='flex items-center gap-[12px]'>
                        <IoMdMail className='text-[#F5F5F5] text-[17px]' />
                        <li className='nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>reservation@gmail.com</li>
                    </div>
                
                </ul>
            </div>

            <div className='p-[8px] flex flex-col gap-[16px]'>
                <p className='nunito-700 text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Quick Links</p>
                <ul className='flex flex-col gap-[12px]'>
                    <li className='nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>About Us</li>
                    <li className='nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>Services</li>
                    <li className='nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>FAQ</li>
                    <li className='nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>Terms and Condition</li>
                    <li className='nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>Privacy Policy</li>
                </ul>
            </div>

            <div className='p-[8px] md:flex flex-col gap-[16px] hidden'>
                <p className='nunito-700 md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Rental Cars</p>
                <ul className='flex flex-col gap-[12px]'>
                    <li className='nunito-400 text-[20px] leading-[27.28px] text-[#F5F5F5]'>Saloon</li>
                    <li className='nunito-400 text-[20px] leading-[27.28px] text-[#F5F5F5]'>Suv</li>
                    <li className='nunito-400 text-[20px] leading-[27.28px] text-[#F5F5F5]'>Mini bus</li>
                    <li className='nunito-400 text-[20px] leading-[27.28px] text-[#F5F5F5]'>Large cars</li>
                </ul>
            </div>

            <div className='p-[8px] md:flex flex-col gap-[16px] hidden'>
                <p className='nunito-700 md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Contact us</p>
                <ul className='flex flex-col gap-[12px]'>
                    <div className='flex items-center gap-[12px]'>
                        <FaPhone className='text-[#F5F5F5] text-[17px]' />
                        <li className='nunito-400 text-[20px] leading-[27.28px] text-[#F5F5F5]'>+234-825470000</li>
                    </div>
                    <div className='flex items-center gap-[12px]'>
                        <FaLocationDot className='text-[#F5F5F5] text-[17px]' />
                        <li className='nunito-400 text-[20px] leading-[27.28px] text-[#F5F5F5]'>No 84. Kwame Nkurumah Crescent, Asoroko Abuja</li>
                    </div>
                    <div className='flex items-center gap-[12px]'>
                        <IoMdMail className='text-[#F5F5F5] text-[17px]' />
                        <li className='nunito-400 text-[20px] leading-[27.28px] text-[#F5F5F5]'>reservation@gmail.com</li>
                    </div>
                
                </ul>
            </div>

            
        </div>

        <div className='flex flex-col gap-[16px] md:mx-[100px] mx-[30px]'>

            <p className='text-[20px] leading-[27.28px] nunito-400 md:nunito-700 md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Follow Us</p>

            <div className='flex items-center gap-[10px]'>
                <div className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-[#DEE7F5] rounded-[50%] flex items-center justify-center'>
                    <img src="/facebook.png" alt='facebook logo' className='w-[18px] h-[18px]'/>
                </div>
                <div className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-[#DEE7F5] rounded-[50%] flex items-center justify-center'>
                    <img src="/instagram.png" alt='instagram logo' className='w-[18px] h-[18px]'/>
                </div>
                <div className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-[#DEE7F5] rounded-[50%] flex items-center justify-center'>
                    <img src="/Youtube.png" alt='youtube logo' className='w-[18px] h-[18px]'/>
                </div>
                <div className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-[#DEE7F5] rounded-[50%] flex items-center justify-center'>
                    <img src="/linkedin.png" alt='linkedin logo' className='w-[18px] h-[18px]'/>
                </div>
            </div>
        </div>

        <div className='border-[0.5px] border-[#FBFBFB]'></div>

        <p className='mx-[30px] nunito-400 text-[16px] leading-[21.82px] md:mx-[100px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>Copyright 2023,crida@gmail.com.All right reserved</p>


    </footer>
  )
}

export default Footer