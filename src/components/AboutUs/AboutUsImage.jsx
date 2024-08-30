import React from 'react'
import aboutUsImage from '../../../public/aboutUsImage.png'

const AboutUsImage = () => {
  return (
    <div className='flex relative'>
        <img src={aboutUsImage} className='w-[344.94px] h-[366px] ml-[30px] md:w-[492.69px] md:h-[450px] md:ml-[100px] absolute left-1 top-[-15px] bg-cover bg-no-repeat' />
        <div className='w-[345.68px] h-[366.32px] ml-[52.32px] border-[5px] md:w-[493.16px] md:h-[450px] md:ml-[131.84px] md:border-[6px] rounded-[8px] border-[#070125]'></div>
    </div>
  )
}

export default AboutUsImage