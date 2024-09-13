import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SharingHero from './SharingHero';
import WhyCarSharing from './WhyCarSharing';

const MainPage = () => {
  return (
    <div className='w-full'>
        <Header />

        <div>
            <SharingHero />
            <WhyCarSharing />
        </div>

        <Footer />
    </div>
  )
}

export default MainPage