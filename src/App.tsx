import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import HowItWorks from './components/HowItWorks'
import Projects from './components/Projects'
import PoweringWhatMatters from './components/PoweringWhatMatters'
import EnergyPlanner from './components/EnergyPlanner'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <Hero />
      <Solutions />
      <HowItWorks />
      <Projects />
      <PoweringWhatMatters />
      <EnergyPlanner />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
