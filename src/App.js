import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [isSticky, setSticky] = useState(false);
  let heroParentRef = useRef(null);
  const NavbarHeight = 50;

  const handleScroll = () => {
    if (window.scrollY >= heroParentRef.current.offsetHeight - NavbarHeight) {
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
    <div>
      <Hero heroOuterContainerRef={heroParentRef} />
      <Navbar isSticky={isSticky} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
