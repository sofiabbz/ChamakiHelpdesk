import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import "./LandingPage.css";

function LandingPage() {
  // Junta todos os componentes da landing numa página só
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;