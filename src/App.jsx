import { useState } from 'react'
import './App.css'
import BuildWithAI from './components/BuildWithAI'
import ClosingCounter from './components/ClosingCounter'
import Footer from './components/Footer'
import ResultsSection from './components/ResultsSection'

function App() {


  return (
    <>
      <ResultsSection />
      <BuildWithAI />
      <ClosingCounter />
      <Footer />
    </>
  );
}

export default App
