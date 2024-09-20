import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import SalesHero from './SalesHero'

const Sales = () => {
  return (
    <div className='bg-[#DEE7F5]'>
        <Header />
        <SalesHero />
        <Footer />
    </div>
  )
}

export default Sales