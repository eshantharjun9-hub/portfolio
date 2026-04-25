import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useReveal } from './hooks/useReveal';
import './App.css';

import ScrollTop from './components/ScrollTop';

function App() {
  // Apply scroll reveal animations globally
  useReveal();

  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      <ScrollTop />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
