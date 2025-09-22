import React from 'react'
import Hero from '../Pages/Hero'
import Features from './Features'
import HowItWorks from './HowItWorks'
import CTA from './CTA'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
        <Footer />
    </div>
  )
}

export default LandingPage