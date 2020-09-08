import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';
import NavBurger from './NavBurger';
import VerticalNavMenu from './VerticalNavMenu';

const Navbar = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <NavWrapper open={open}>
        <NavContainer isSticky={props.isSticky}>
          <NavLinks>
            <Home href="#home"><span>Jalisa</span> Bonilla</Home>
            <About href="#about">About</About>
            <Projects href="#projects">Projects</Projects>
            <Contact href="#contact">Contact</Contact>
          </NavLinks>
          <BurgerContainer>
            <NavBurger open={open} setOpen={setOpen} />
            <VerticalNavMenu open={open} />
          </BurgerContainer>
        </NavContainer>
      </NavWrapper>
    </Fragment>
  );
};

export default Navbar;

const NavWrapper = styled.div`
  position: relative;
`;

const NavContainer = styled.div`
  width: 100%;
  background-color: black;
  z-index: 1000;
  left: 0;
  right: 0;
  position: ${props => (props.isSticky ? 'fixed' : 'absolute')};
  bottom: ${props => (props.isSticky ? 'revert' : '0')};
  top: ${props => (props.isSticky ? '0' : 'revert')};
  list-style: none;
  font-size: 1.1rem;
  min-height: 50px;
`;

const NavLinks = styled.div`
  display: grid;
  grid-template-columns: 12.5% repeat(4, 18.75%) 12.5%;
  grid-template-rows: 50px;
  text-align: center;
  align-items: center;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    letter-spacing: 0.1em;

    &:hover {
      color: #a72592;
    }
  }

  
`;

const Home = styled.a`
  grid-column: 2/3;

  span {
    color: #E0FF4F;
  }

  @media (max-width: ${device.tabletM}) {
    grid-column: 1/span 3;
  }
`;

const About = styled.a`
  grid-column: 3/4;

  @media (max-width: ${device.tabletM}) {
    display: none;
  }
`;

const Projects = styled.a`
  grid-column: 4/5;

  @media (max-width: ${device.tabletM}) {
    display: none;
  }
`;

const Contact = styled.a`
  grid-column: 5/6;

  @media (max-width: ${device.tabletM}) {
    display: none;
  }
`;

const BurgerContainer = styled.div`
  display: none;

  @media (max-width: ${device.tabletM}) {
    display: block;
  }
`;
