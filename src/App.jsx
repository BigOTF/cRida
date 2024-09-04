import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SubHero from './components/SubHero/SubHero'
import AboutUs from './components/AboutUs/AboutUs'
import ChooseUs from './components/ChooseUs/ChooseUs'
import Services from './components/OurServices/Services'
import Explore from './components/Explore/Explore'
import Show from './components/Show/Show'
import Subscribe from './components/Subscribe/Subscribe'

function App() {

  return (
    <div className='pb-[1000px] bg-[#DEE7F5]  md:w-[1440px] w-[428px]'>
      <Header />
      <Hero />
      <SubHero />
      <AboutUs />
      <ChooseUs />
      <Services />
      <Explore />
      <Show />
      <Subscribe />
    </div>
  )
}

export default App