import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import SocialProof from "./components/sections/SocialProof";
import Features from "./components/sections/Features";
import Vorteile from "./components/sections/Vorteile";
import Foerderung from "./components/sections/Foerderung";
import Ablauf from "./components/sections/Ablauf";
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
        <Features />
        <Vorteile />
        <Foerderung />
        <Ablauf />
        <Schulung />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
