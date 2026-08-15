import "./App.css";

import StatementBlock from "./components/StatementBlock";
import AgentCTA from "./components/Agentcta";
import ResultsSection from "./components/ResultsSection";
import BuildWithAI from "./components/BuildWithAI";
import ClosingCounter from "./components/ClosingCounter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <StatementBlock />
      <AgentCTA />
      <ResultsSection />
      <BuildWithAI />
      <ClosingCounter />
      <Footer />
    </>
  );
}

export default App;
