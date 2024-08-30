import React from 'react'

const Buttons = () => {
  return (
    <div className='md:flex items-center gap-[8px] hidden'>
        <button className='md:w-[91px] md:h-[43px] md:rounded-[4px] md:text-[20px] text-[#070125] border'>
            Sign In
        </button>

        <button className='md:w-[91px] md:h-[43px] md:rounded-[4px] md:text-[20px] bg-[#BF5B12] text-white border'>
            Sign Up
        </button>
    </div>
  )
}

export default Buttons