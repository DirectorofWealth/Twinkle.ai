import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AgentCTA from './components/Agentcta'
import Testimonial from './components/testimonial'
import Resultsection from './components/Resultssection'
import StatementBlock from './components/StatementBlock'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/Productshowcase'
import ClosingCounter from './components/ClosingCounter'
import Footer from './components/Footer'
import LogoStrip from './components/LogoStrip'



function App() {

  return (
    <>
    <Header />
    <Hero />
    <ProductShowcase />
    <LogoStrip />
    <StatementBlock />
    <AgentCTA />
    {/* <Testimonial /> */}
    {/* <Resultsection /> */}
    <ClosingCounter />
    <Footer />
    
      
    </>
  )
}

export default App
