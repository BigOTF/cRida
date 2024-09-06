import React from 'react'
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import facebook from '../../../public/facebook.png'
import instagram from '../../../public/instagram.png'
import youtube from '../../../public/youtube.png'
import linkedin from '../../../public/linkedin.png'

const Footer = () => {
  return (
    <footer className='mt-[50px] w-[428px] h-[705px] pt-[30px] pb-[100px] md:mt-[150px] md:py-[100px] md:w-[1440px] md:h-[702px] bg-[#070125]'>

        <div className='flex flex-col gap-[30px] md:gap-0 md:flex-row justify-between md:mx-[100px] mx-[30px]'>

            <div className='md:w-[295px] md:h-[173px] p-[8px] hidden md:flex flex-col gap-[16px]'>
                <p className='md:w-[279px] md:h-[33px] font-bold md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>About Us</p>
                <p className='md:w-[279px] md:h-[108px] text-[20px] leading-[27.28px] text-[#F5F5F5]'>Discover CRida's commitment to excellence and learn more about our mission to redefine transportation services.</p>
            </div>
            
            {/* THIS WILL SHOW ONLY ON THE MOBILE VIEW */}
            <div className='w-[368px] h-[183px] md:w-[295px] md:h-[197px] p-[8px] flex flex-col gap-[16px] md:hidden'>
                <p className='font-bold w-[[99px] h-[27px] text-[20px] leading-[27.28px] md:w-[119px] md:h-[33px] md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Contact us</p>
                <ul className='w-[352px] h-[124px] md:w-[194px] md:h-[183px] flex flex-col gap-[12px]'>
                    <div className='w-[352px] h-[25px] md:w-[279px] md:h-[27px] flex items-center gap-[8px]'>
                        <FaPhone className='text-[#F5F5F5] w-[18px] h-[18px]' />
                        <li className='w-[326px] h-[25px] text-[18px] leading-[24.55px] md:w-[253px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>+234-825470000</li>
                    </div>
                    <div className='w-[352px] h-[50px] md:w-[279px] md:h-[54px] flex items-center gap-[8px]'>
                        <FaLocationDot className='text-[#F5F5F5] w-[18px] h-[18px]' />
                        <li className='w-[326px] h-[50px] text-[18px] leading-[24.55px] md:w-[253px] md:h-[54px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>No 84. Kwame Nkurumah Crescent, Asoroko Abuja</li>
                    </div>
                    <div className='w-[352px] h-[25px] md:w-[279px] md:h-[27px] flex items-center gap-[8px]'>
                        <IoMdMail className='text-[#F5F5F5] w-[18px] h-[18px]' />
                        <li className='w-[326px] h-[25px] text-[18px] leading-[24.55px] md:w-[253px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>reservation@gmail.com</li>
                    </div>
                
                </ul>
            </div>

            <div className='w-[210px] h-[232px] md:w-[210px] md:h-[248px] p-[8px] flex flex-col gap-[16px]'>
                <p className='font-bold w-[194px] h-[27px] text-[20px] leading-[27.28px] md:w-[194px] md:h-[33px] md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Quick Links</p>
                <ul className='w-[194px] h-[173px] md:w-[194px] md:h-[183px] flex flex-col gap-[12px]'>
                    <li className='w-[194px] h-[25px] text-[18px] leading-[24.55px] md:w-[194px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>About Us</li>
                    <li className='w-[194px] h-[25px] text-[18px] leading-[24.55px] md:w-[194px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>Services</li>
                    <li className='w-[194px] h-[25px] text-[18px] leading-[24.55px] md:w-[194px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>FAQ</li>
                    <li className='w-[194px] h-[25px] text-[18px] leading-[24.55px] md:w-[194px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>Terms and Condition</li>
                    <li className='w-[194px] h-[25px] text-[18px] leading-[24.55px] md:w-[194px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>Privacy Policy</li>
                </ul>
            </div>

            <div className='md:w-[150px] md:h-[221px] p-[8px] md:flex flex-col gap-[16px] hidden'>
                <p className='font-bold md:w-[134px] md:h-[33px] md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Rental Cars</p>
                <ul className='md:w-[194px] md:h-[183px] flex flex-col gap-[12px]'>
                    <li className='md:w-[134px] md:h-[27px] text-[20px] leading-[27.28px] text-[#F5F5F5]'>Saloon</li>
                    <li className='md:w-[134px] md:h-[27px] text-[20px] leading-[27.28px] text-[#F5F5F5]'>Suv</li>
                    <li className='md:w-[134px] md:h-[27px] text-[20px] leading-[27.28px] text-[#F5F5F5]'>Mini bus</li>
                    <li className='md:w-[134px] md:h-[27px] text-[20px] leading-[27.28px] text-[#F5F5F5]'>Large cars</li>
                </ul>
            </div>

            <div className='md:w-[295px] md:h-[197px] p-[8px] md:flex flex-col gap-[16px] hidden'>
                <p className='font-bold md:w-[119px] md:h-[33px] md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Contact us</p>
                <ul className='md:w-[194px] md:h-[183px] flex flex-col gap-[12px]'>
                    <div className='md:w-[279px] md:h-[27px] flex items-center gap-[8px]'>
                        <FaPhone className='text-[#F5F5F5] md:w-[18px] md:h-[18px]' />
                        <li className='md:w-[253px] md:h-[27px] text-[20px] leading-[27.28px] text-[#F5F5F5]'>+234-825470000</li>
                    </div>
                    <div className='md:w-[279px] md:h-[54px] flex items-center gap-[8px]'>
                        <FaLocationDot className='text-[#F5F5F5] md:w-[18px] md:h-[18px]' />
                        <li className='md:w-[253px] md:h-[54px] text-[20px] leading-[27.28px] text-[#F5F5F5]'>No 84. Kwame Nkurumah Crescent, Asoroko Abuja</li>
                    </div>
                    <div className='md:w-[279px] md:h-[27px] flex items-center gap-[8px]'>
                        <IoMdMail className='text-[#F5F5F5] md:w-[18px] md:h-[18px]' />
                        <li className='md:w-[253px] md:h-[27px] text-[20px] leading-[27.28px] text-[#F5F5F5]'>reservation@gmail.com</li>
                    </div>
                
                </ul>
            </div>

            
        </div>

        <div className='mt-[30px] md:mt-0 mx-[30px] md:w-[172px] md:h-[89px] flex flex-col gap-[16px] md:mx-[100px]'>

            <p className='w-[91px] h-[27px] text-[20px] leading-[27.28px] md:w-[113px] md:h-[33px] md:font-bold md:text-[24px] md:leading-[32.74px] text-[#F5F5F5]'>Follow Us</p>

            <div className='w-[152px] h-[32px] md:w-[172px] md:h-[40px] flex items-center justify-between'>
                <div className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-[#DEE7F5] rounded-[50%] flex items-center justify-center'>
                    <img src={facebook} alt='facebook logo' className='w-[18px] h-[18px]'/>
                </div>
                <div className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-[#DEE7F5] rounded-[50%] flex items-center justify-center'>
                    <img src={instagram} alt='instagram logo' className='w-[18px] h-[18px]'/>
                </div>
                <div className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-[#DEE7F5] rounded-[50%] flex items-center justify-center'>
                    <img src={youtube} alt='youtube logo' className='w-[18px] h-[18px]'/>
                </div>
                <div className='w-[32px] h-[32px] md:w-[40px] md:h-[40px] bg-[#DEE7F5] rounded-[50%] flex items-center justify-center'>
                    <img src={linkedin} alt='linkedin logo' className='w-[18px] h-[18px]'/>
                </div>
            </div>
        </div>

        <div className='my-[30px] w-[428px] md:w-[1440px] md:mt-[100px] border-[0.5px] border-[#FBFBFB]'></div>

        <p className='mx-[30px] w-[368px] h-[22px] text-[16px] leading-[21.82px] md:pt-[30px] md:mx-[100px] md:w-[527px] md:h-[27px] md:text-[20px] md:leading-[27.28px] text-[#F5F5F5]'>Copyright 2023,crida@gmail.com.All right reserved</p>


    </footer>
  )
}

export default Footer