import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Container from "./layout/Container";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#070B1A] text-white overflow-x-hidden">
      <Container>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;