import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WhoWeAre from './WhoWeAre'
import Mission from './Mission'
import OfferServices from './OfferServices'

const AboutPage = () => {
  return (
    <div className='w-full bg-[#DEE7F5]'>
        <Header />

        <div className='aboutUsPageHero flex items-center justify-center md:h-[602px] h-[214px]'>
            <p className='nunito-700 text-[#F5F5F5] text-[24px] leading-[32.74px] md:text-[48px] md:leading-[65.47px] text-center'>About Us</p>
        </div>

        <div className='mt-[30px] px-[10px] md:px-[100px] md:mt-[120px] flex flex-col gap-[50px] md:gap-[100px]'>

            <div>
                <WhoWeAre />
            </div>

            <div>
                <Mission />
            </div>

            <div>
                <OfferServices />
            </div>
          
        </div>

        <Footer />
 
    </div>
  )
}

export default AboutPage