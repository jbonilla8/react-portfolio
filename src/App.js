import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import ReactApps from './components/ReactApps';
import Designs from './components/Designs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [isSticky, setSticky] = useState(false);
  let heroParentRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY >= heroParentRef.current.offsetHeight - 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [heroParentRef, isSticky]);

  return (
    <div className="App">
      <Hero heroOuterContainerRef={heroParentRef} />
      <Navbar isSticky={isSticky} />
      <About />
      <ReactApps />
      <Designs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
