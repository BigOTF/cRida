import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SubHero from './components/SubHero/SubHero'
import AboutUs from './components/AboutUs/AboutUs'
import ChooseUs from './components/ChooseUs/ChooseUs'

function App() {

  return (
    <div className='pb-[500px]'>
      <Header />
      <Hero />
      <SubHero />
      <AboutUs />
      <ChooseUs />
    </div>
  )
}

export default App