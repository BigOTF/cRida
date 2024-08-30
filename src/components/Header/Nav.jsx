import React, { useState } from 'react'

const Nav = ({ toggleNav }) => {
    
  return (
    <section>
        <nav className='md:w-[715px]'>
            <ul className={toggleNav ? 'hidden' : 'flex flex-col gap-7 mt-[30px] md:mt-0 md:gap-0 md:flex-row md:justify-between md:items-center'}>
                <li>
                    <a href='/' className='text-[#000000] font-bold md:font-normal md:text-[#070125] md:hover:text-[#939294] md:text-[20px] cursor-pointer transition-all duration-500'>Home</a>
                </li>
                <li>
                    <a href='/about' className='text-[#000000] font-bold md:font-normal md:text-[#070125] md:hover:text-[#939294] md:text-[20px] cursor-pointer transition-all duration-500'>About Us</a>
                </li>
                <li>
                    <a href='/rentals' className='text-[#000000] font-bold md:font-normal md:text-[#070125] md:hover:text-[#939294] md:text-[20px] cursor-pointer transition-all duration-500'>Car Rentals</a>
                </li>
                <li>
                    <a href='/sales' className='text-[#000000] font-bold md:font-normal md:text-[#070125] md:hover:text-[#939294] md:text-[20px] cursor-pointer transition-all duration-500'>Car Sales</a>
                </li>
                <li>
                    <a href='/ride' className='text-[#000000] font-bold md:font-normal md:text-[#070125] md:hover:text-[#939294] md:text-[20px] cursor-pointer transition-all duration-500'>Co-Ride</a>
                </li>
                <li>
                    <a href='/hailing' className='text-[#000000] font-bold md:font-normal md:text-[#070125] md:hover:text-[#939294] md:text-[20px] cursor-pointer transition-all duration-500'>Ride Hailing</a>
                </li>
            </ul>
        </nav>

      
    </section>
  )
}

export default Nav