import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AgentCTA from './components/Agentcta'
import StatementBlock from './components/StatementBlock'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/Productshowcase'
import ClosingCounter from './components/ClosingCounter'
import Footer from './components/Footer'
import LogoStrip from './components/LogoStrip'
import BuildWithAI from './components/BuildWithAI'
import Testimonials from './components/Testimonials'
import Results from './components/Results'



function App() {

  return (
    <>
    <Header />
    <Hero />
    <ProductShowcase />
    <LogoStrip />
    <StatementBlock />
    <AgentCTA />
    <Testimonials />
    <Results />
    <BuildWithAI />
    <ClosingCounter />
    <Footer />
    
      
    </>
  )
}

export default App
