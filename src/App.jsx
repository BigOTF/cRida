import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SubHero from './components/SubHero/SubHero'
import AboutUs from './components/AboutUs/AboutUs'
import ChooseUs from './components/ChooseUs/ChooseUs'
import Services from './components/OurServices/Services'
import Explore from './components/Explore/Explore'
import Show from './components/Show/Show'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonial from './components/Testimonial/Testimonial'
import Faq from './components/FAQ/Faq'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='bg-[#DEE7F5]  md:w-[1440px] w-[428px]'>
      <Header />
      <Hero />
      <SubHero />
      <AboutUs />
      <ChooseUs />
      <Services />
      <Explore />
      <Show />
      <Subscribe />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  )
}

export default App