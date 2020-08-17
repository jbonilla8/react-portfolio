import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import ReactApps from './components/ReactApps';
import Designs from './components/Designs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(props) {

  const [isSticky, setSticky] = useState(false);
  let heroParentRef = useRef(null);

  const handleScroll = () => {
    // if the window is greater or equal to the hero's outer height minus the nav Height
    // setSticky = true
  };

  useEffect(() => {
    if (heroParentRef.current) {
      let heroHeight = heroParentRef.current.offsetHeight;
      console.log('HERO HEIGHT', heroHeight);
    }
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', () => handleScroll);
    // };
  }, [heroParentRef]);

  return (
    <div className="App">
      <Hero heroOuterContainerRef={heroParentRef} />
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
