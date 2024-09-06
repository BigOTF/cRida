import React, { useState } from 'react'
import Buttons from './Buttons'

import { MdMenu, MdOutlineClose } from "react-icons/md";

const Header = () => {
    const [toggleNav, setToggleNav] = useState(true);

    const handleToggleNav = () => {
        return setToggleNav((prev) => !prev);
    }
    
  return (
    <header className='md:h-[83px] flex items-center justify-center bg-[#F5F5F5]'>

        {/* THIS FUNCTION WORKS ON LARGE SCREEN */}
        <section className='w-full mx-[100px] h-[44px] md:flex justify-between items-center hidden'>
            <h1 className='w-[89px] h-[44px] nunito-700 text-[32px] leading-[43.65px]'>cRida</h1>
            
            <nav className='w-[715px] h-[27px] flex items-center justify-between'>
                <a href='/' className='nunito-400 text-[#070125] hover:text-[#939294] text-[20px] leading-[27.28px] text-center cursor-pointer transition-all duration-500'>Home</a>
                <a href='/about' className='nunito-400 text-[#070125] hover:text-[#939294] text-[20px] leading-[27.28px] text-center cursor-pointer transition-all duration-500'>About Us</a>
                <a href='/rentals' className='nunito-400 text-[#070125] hover:text-[#939294] text-[20px] leading-[27.28px] text-center cursor-pointer transition-all duration-500'>Car Rentals</a>
                <a href='/sales' className='nunito-400 text-[#070125] hover:text-[#939294] text-[20px] leading-[27.28px] text-center cursor-pointer transition-all duration-500'>Car Sales</a>
                <a href='/ride' className='nunito-400 text-[#070125] hover:text-[#939294] text-[20px] leading-[27.28px] text-center cursor-pointer transition-all duration-500'>Co-Ride</a>
                <a href='/hailing' className='nunito-400 text-[#070125] hover:text-[#939294] text-[20px] leading-[27.28px] text-center cursor-pointer transition-all duration-500'>Ride Hailing</a>
            </nav>

            <Buttons />
        </section>

        {/* THIS FUNCTION WORKS ON MOBILE SCREEN */}
        <section className='w-full mx-[30px] my-[10px] md:hidden'>

            <div className='flex items-center justify-between'>
                <h1 className='h-[44px] nunito-700 text-[32px] leading-[43.65px]'>cRida</h1>

                <div>
                    {
                        toggleNav ?  <MdMenu className='w-[35px] h-[30px]' onClick={handleToggleNav}/> : <MdOutlineClose className='w-[35px] h-[30px]' onClick={handleToggleNav}/>
                    }
                </div>
            </div>
           
            <nav className={toggleNav ? 'hidden' : 'flex flex-col gap-[16px] mt-[20px] mb-[10px]'}>
                <a href='/' className='nunito-400 text-[#070125] text-[18px] leading-[27.28px]'>Home</a>
                <a href='/about' className='nunito-400 text-[#070125] text-[18px] leading-[27.28px]'>About Us</a>
                <a href='/rentals' className='nunito-400 text-[#070125] text-[18px] leading-[27.28px]'>Car Rentals</a>
                <a href='/sales' className='nunito-400 text-[#070125] text-[18px] leading-[27.28px]'>Car Sales</a>
                <a href='/ride' className='nunito-400 text-[#070125] text-[18px] leading-[27.28px]'>Co-Ride</a>
                <a href='/hailing' className='nunito-400 text-[#070125] text-[18px] leading-[27.28px]'>Ride Hailing</a>
            </nav>
            
        </section>
    

    </header>
  )
}

export default Header