import React from 'react'
import HeroSide from './HeroSide'

const Hero = () => {
  return (
    <main className='flex flex-col md:flex-row'>
        <div className='md:w-[50%] md:h-[689px] w-full h-[352px] heroSide1Background flex items-center justify-center px-[30px] md:px-0'>
          <HeroSide />
        </div>
        <div className='md:w-[50%] md:h-[689px] w-full h-[352px] heroSide2Background'></div>
    </main>
  )
}

export default Hero