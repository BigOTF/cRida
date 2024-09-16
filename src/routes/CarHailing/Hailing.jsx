import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HailingHero from './HailingHero'
import HailingSubHero from './HailingSubHero'
import WhyHailing from './WhyHailing'
import AvailableHailing from './AvailableHailing'

const Hailing = () => {
  return (
    <div className='bg-[#DEE7F5]'>
      <Header />

        <div className='w-full'>
          <HailingHero />
          <HailingSubHero />
          <WhyHailing />
          <AvailableHailing />
         
        </div>
      <Footer />
    </div>
  )
}

export default Hailing