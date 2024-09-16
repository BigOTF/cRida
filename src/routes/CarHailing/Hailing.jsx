import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FAQ from '../../components/FAQ/Faq'

import HailingHero from './HailingHero'
import HailingSubHero from './HailingSubHero'
import WhyHailing from './WhyHailing'
import AvailableHailing from './AvailableHailing'
import HailingForm from './HailingForm'

const Hailing = () => {
  return (
    <div className='bg-[#DEE7F5]'>
      <Header />
      <div className='w-full'>
        <HailingHero />
        <HailingSubHero />
        <WhyHailing />
        <AvailableHailing />
        <HailingForm />
      </div>
      <FAQ />
      <Footer />
    </div>
  )
}

export default Hailing