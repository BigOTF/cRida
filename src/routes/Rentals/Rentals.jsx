import React from 'react'
import Header from '../../components/Header/Header'
import Faq from '../../components/FAQ/Faq'
import Footer from '../../components/Footer/Footer'
import RentalHero from './RentalHero'
import RentalExplore from './RentalExplore'

const Rentals = () => {
  return (
    <div className='bg-[#DEE7F5]'>
        <Header />
        <RentalHero />
        <RentalExplore />
        <Faq />
        <Footer />
    </div>
  )
}

export default Rentals