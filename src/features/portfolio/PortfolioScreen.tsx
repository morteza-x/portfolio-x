import About from "./components/about/About";
import Contact from "./components/Contact";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TapeSection from "./components/TapeSection";
import Testimonials from "./components/Testimonials";

const PortfolioScreen = () => {
  return (
    <div>
      <Header />
      <Hero />

      <Projects />
      <TapeSection />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioScreen;
