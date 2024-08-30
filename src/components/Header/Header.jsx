import React, { useState } from 'react'
import Nav from './Nav'
import Buttons from './Buttons'

import { MdMenu, MdOutlineClose } from "react-icons/md";

const Header = () => {
    const [toggleNav, setToggleNav] = useState(true);

    const handleToggleNav = () => {
        return setToggleNav((prev) => !prev);
    }
    
  return (
    <header className='md:h-[83px] bg-white'>

        {/* THIS FUNCTION WORKS ON LARGE SCREEN */}
        <section className='w-[1240px] h-[44px] md:ml-[115px] mt-[20px] md:flex justify-between items-center hidden'>
            <h1 className='font-bold text-[32px]'>cRida</h1>
            <Nav />
            <Buttons />
        </section>

        {/* THIS FUNCTION WORKS ON MOBILE SCREEN */}
        <section className='mx-[30px] md:hidden'>

            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-[32px]'>cRida</h1>
                <div>
                    {
                        toggleNav ?  <MdMenu className='w-[35px] h-[27px]' onClick={handleToggleNav}/> : <MdOutlineClose className='w-[35px] h-[27px]' onClick={handleToggleNav}/>
                    }
                </div>
            </div>
           
            <Nav toggleNav={toggleNav}/>

        </section>



    </header>
  )
}

export default Header