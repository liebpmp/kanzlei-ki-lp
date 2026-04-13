import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import SocialProof from "./components/sections/SocialProof";
import PainPoints from "./components/sections/PainPoints";
import Vorteile from "./components/sections/Vorteile";
import Testimonials from "./components/sections/Testimonials";
import Foerderung from "./components/sections/Foerderung";
import Ablauf from "./components/sections/Ablauf";
import KanzleiAudit from "./components/sections/KanzleiAudit";
import KanzleiDatenbank from "./components/sections/KanzleiDatenbank";
import AgentDeploy from "./components/sections/AgentDeploy";
import AgentBoard from "./components/sections/AgentBoard";
import PrivateLLM from "./components/sections/PrivateLLM";
import Schulung from "./components/sections/Schulung";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <PainPoints />
        <Vorteile />
        <Testimonials />
        <Foerderung />
        <Ablauf />
        <KanzleiAudit />
        <KanzleiDatenbank />
        <AgentDeploy />
        <AgentBoard />
        <PrivateLLM />
        <Schulung />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
