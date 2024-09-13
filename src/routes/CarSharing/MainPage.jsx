import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SharingHero from './SharingHero';
import WhyCarSharing from './WhyCarSharing';
import TodoCarSharing from './TodoCarSharing';
import ExploreCar from './ExploreCar';
import Locations from './Locations';
import AreaCovered from './AreaCovered';

const MainPage = () => {
  return (
    <div className='w-full'>
        <Header />

        <div>
            <SharingHero />
            <WhyCarSharing />

            <div className='bg-[#DEE7F5]'>
                <TodoCarSharing />
                <ExploreCar />
                <Locations />
                <AreaCovered />
            </div>
            
        </div>

        <Footer />
    </div>
  )
}

export default MainPage