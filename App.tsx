import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PoweringWhatMatters from './components/PoweringWhatMatters'
import Solutions from './components/Solutions'
import HowItWorks from './components/HowItWorks'
import EnergyPlanner from './components/EnergyPlanner'
import Projects from './components/Projects'
import WhyEA from './components/WhyEA'
import About from './components/About'
import TrustSection from './components/TrustSection'
import QuoteForm from './components/QuoteForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ServiceNeed } from './types'

export default function App() {
  const [quotePrefill, setQuotePrefill] = useState<{ need: ServiceNeed; token: number } | null>(
    null,
  )

  function handleRequestAssessment(need: ServiceNeed) {
    setQuotePrefill({ need, token: Date.now() })
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PoweringWhatMatters />
        <Solutions />
        <HowItWorks />
        <EnergyPlanner onRequestAssessment={handleRequestAssessment} />
        <Projects />
        <WhyEA />
        <About />
        <TrustSection />
        <QuoteForm prefillNeed={quotePrefill?.need ?? null} key={quotePrefill?.token} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
