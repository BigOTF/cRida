import React from 'react'

const Buttons = () => {
  return (
    <div className='md:flex items-center gap-[8px] hidden'>

      <div className='w-[91px] h-[43px] rounded-[4px] border border-[#070125] p-[8px] flex items-center justify-center'>
        <button className='nunito-400 text-[20px] leading-[27.28px] text-[#070125]'>
          Sign In
        </button>
      </div>

      <div className='w-[91px] h-[43px] rounded-[4px] border border-[#070125] p-[8px] flex items-center justify-center bg-[#BF5B12]'>
        <button className='nunito-400 text-[20px] leading-[27.28px] text-[#FBFBFB]'>
          Sign Up 
        </button>
      </div>
      
    </div>
  )
}

export default Buttons