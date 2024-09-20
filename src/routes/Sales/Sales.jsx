import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import SalesHero from './SalesHero'
import SalesSubHero from './SalesSubHero'
import FeaturedCars from './FeaturedCars'

const Sales = () => {
  return (
    <div className='bg-[#DEE7F5]'>
        <Header />
        <SalesHero />
        <SalesSubHero />
        <FeaturedCars />
        <Footer />
    </div>
  )
}

export default Sales