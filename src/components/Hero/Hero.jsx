import React from 'react'
import HeroSide from './HeroSide'

const Hero = () => {
  return (
    <main className='flex flex-col md:flex-row'>
        <div className='md:w-[720px] md:h-[689px] w-[428px] h-[352px] heroSide1Background flex items-center justify-center'>
          <HeroSide />
        </div>
        <div className='md:w-[720px] md:h-[689px] w-[428px] h-[352px] heroSide2Background opacity-[40%] md:opacity-[100%]'></div>
    </main>
  )
}

export default Hero