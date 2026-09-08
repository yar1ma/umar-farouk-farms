import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FeaturedLivestock from './components/FeaturedLivestock'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedLivestock />
      <HowItWorks />
      <About />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  )
}

export default App