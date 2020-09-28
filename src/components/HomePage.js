import React, { Fragment, useState, useRef, useEffect, lazy, Suspense } from 'react';

import Hero from './Hero';
import Navbar from './Navbar';
import Spinner from '../shared/Spinner';

const About = lazy(() => import(`./About`));
const Stack = lazy(() => import(`./Stack`));
const Projects = lazy(() => import(`./Projects`));
const Contact = lazy(() => import(`./Contact`));
const Footer = lazy(() => import(`./Footer`));


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
            <Suspense fallback={<Spinner />}>
                <About />
                <Stack />
                <Projects />
                <Contact />
                <Footer />
            </Suspense>
        </Fragment>
    )
}

export default HomePage;