import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedLivestock from '../components/FeaturedLivestock'
import HowItWorks from '../components/HowItWorks'
import About from '../components/About'
import ContactForm from '../components/ContactForm'
import Contact from '../components/Contact'

// Home page: combines all homepage sections in order
function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedLivestock />
      <HowItWorks />
      <About />
      <ContactForm />
      <Contact />
    </>
  )
}

export default Home