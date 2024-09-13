import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SharingHero from './SharingHero';
import WhyCarSharing from './WhyCarSharing';
import TodoCarSharing from './TodoCarSharing';
import ExploreCar from './ExploreCar';
import Locations from './Locations';
import AreaCovered from './AreaCovered';
import CarSharingFAQ from './CarSharingFAQ';

const MainPage = () => {
  return (
    <div className='w-full bg-[#DEE7F5]'>
      <Header />

      <div>

        <div className='bg-[#F5F5F5]'>
          <SharingHero />
          <WhyCarSharing />
        </div>
    
        <TodoCarSharing />
        <ExploreCar />
        <Locations />
        <AreaCovered />
        <CarSharingFAQ />
  
          
      </div>

      <Footer />
    </div>
  )
}

export default MainPage