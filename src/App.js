import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import ReactApps from './components/ReactApps';
import Designs from './components/Designs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Navbar />
      <About />
      <ReactApps />
      <Designs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
