import "./App.css";

import StatementBlock from "./components/StatementBlock";
import AgentCTA from "./components/Agentcta";
import ResultsSection from "./components/ResultsSection";
import BuildWithAI from "./components/BuildWithAI";
import ClosingCounter from "./components/ClosingCounter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <StatementBlock />
        <AgentCTA />
        <ResultsSection />
        <BuildWithAI />
        <ClosingCounter />
      </main>

      <Footer />
    </>
  );
}

export default App;
