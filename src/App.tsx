import './styles/globals.css'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import BrandLogos from './components/BrandLogos'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import CreatorPartners from './components/CreatorPartners'
import UniversityPartners from './components/UniversityPartners'
import Services from './components/Services'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <BrandLogos />
      <Stats />
      <HowItWorks />
      <CreatorPartners />
      <UniversityPartners />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App
