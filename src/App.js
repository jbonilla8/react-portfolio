import React, { useState, useEffect, useRef, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
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
    <Fragment>
      <Hero heroOuterContainerRef={heroParentRef} />
      <Navbar isSticky={isSticky} />
      <About />
      <Stack />
      <Projects />
      <BrowserRouter>
        <Route path="/projectDetails/:id" component={ProjectDetails} />
      </BrowserRouter>
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
