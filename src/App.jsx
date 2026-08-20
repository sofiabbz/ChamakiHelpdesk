import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/services/Services";
import HowItWorks from "./components/howitworks/HowItWorks";
import Contact from "./components/contact/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Contact />
    </div>
  );
}

export default App;