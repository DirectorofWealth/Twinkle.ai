import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AgentCTA from './components/Agentcta'
import Testimonial from './components/testimonial'
import Resultsection from './components/Resultssection'
import StatementBlock from './components/StatementBlock'

function App() {

  return (
    <>

    <StatementBlock />
    <AgentCTA />
    <Testimonial />
    <Resultsection />
      
    </>
  )
}

export default App
