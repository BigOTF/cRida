import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HailingHero from './HailingHero'

const Hailing = () => {
  return (
    <div>
      <Header />

        <div className='w-full'>
          <HailingHero />
         
        </div>
      <Footer />
    </div>
  )
}

export default Hailing