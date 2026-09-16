import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import PoweringWhatMatters from '@/components/sections/PoweringWhatMatters'
import Solutions from '@/components/sections/Solutions'
import HowItWorks from '@/components/sections/HowItWorks'
import EnergyPlanner from '@/components/sections/EnergyPlanner'
import Projects from '@/components/sections/Projects'
import WhyEA from '@/components/sections/WhyEA'
import About from '@/components/sections/About'
import TrustSection from '@/components/sections/TrustSection'
import QuoteForm from '@/components/sections/QuoteForm'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import type { ServiceNeed } from '@/types'

export const Route = createFileRoute('/')({ component: App })

function App() {
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
