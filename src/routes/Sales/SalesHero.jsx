import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";

const SalesHero = () => {
    const [search, setSearch] = useState('');
  return (
    <div className='salesHero md:h-[723px] h-[393px] w-full flex items-center justify-center md:px-[200px]'>
        <div className='md:flex flex-col gap-[50px] w-full hidden'>
            <p className='nunito-700 text-[#F5F5F5] md:text-[48px] md:leading-[65.47px] text-center'>Find the Car of Your Choice</p>

            <div className='flex items-center gap-[8px] p-[8px] rounded-[4px] border-[1.5px] border-[#F5F5F5]'>

                <div className='p-[8px] flex items-center gap-[16px] w-full'>
                    <label>
                        <IoSearchOutline className='w-[24px] h-[24px] text-[#F5F5F5]'/>
                    </label>
                    <input className='focus:outline-none w-full nunito-400 md:text-[32px] md:leading-[43.65px] text-[#F5F5F5] bg-inherit'
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Find car by model, year'
                    />
                </div>

                <div className='bg-[#5810BF] md:w-[140px] md:h-[49px] p-[8px] rounded-[8px] text-center place-content-center'>
                    <a className='text-[#F5F5F5] nunito-400 md:text-[24px] md:leading-[32.74px] cursor-pointer'>Search</a>
                </div>
            </div>
        </div>

        {/* Will only show on the smaller screen */}
        <div className='md:hidden'>
            <p className='text-[#F5F5F5] nunito-700 text-[32px] leading-[43.65px]'>Car Sales</p>
        </div>
       
    </div>
  )
}

export default SalesHero