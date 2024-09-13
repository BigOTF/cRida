import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SharingHero from './SharingHero';
import WhyCarSharing from './WhyCarSharing';
import TodoCarSharing from './TodoCarSharing';

const MainPage = () => {
  return (
    <div className='w-full'>
        <Header />

        <div>
            <SharingHero />
            <WhyCarSharing />

            <div className='bg-[#DEE7F5]'>
                <TodoCarSharing />
            </div>
            
        </div>

        <Footer />
    </div>
  )
}

export default MainPage