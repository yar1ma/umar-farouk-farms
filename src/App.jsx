import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FeaturedLivestock from './components/FeaturedLivestock'
import HowItWorks from './components/HowItWorks'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedLivestock />
      <HowItWorks />
      <About />
    </div>
  )
}

export default App