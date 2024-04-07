import logo from './logo.svg';
import './index.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
function App() {
  return (
    <>
  <Navbar/>
  <Hero/>
  <About/>
  <Skills/>
  <Projects/>
  <Education/>
  <Contact/>
    </>
  );
}

export default App;
