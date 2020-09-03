import React, { Fragment, useState, useRef, useEffect } from 'react';

import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Stack from './Stack';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const HomePage = () => {
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
            window.removeEventListener('scroll', handleScroll);
        };
    }, [heroParentRef, isSticky]);

    return (
        <Fragment>
            <Hero heroOuterContainerRef={heroParentRef} />
            <Navbar isSticky={isSticky} />
            <About />
            <Stack />
            <Projects />
            <Contact />
            <Footer />
        </Fragment>
    )
}

export default HomePage;