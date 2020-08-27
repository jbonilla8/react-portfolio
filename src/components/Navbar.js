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
            <Home href="#home">Home</Home>
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
  height: 50px;
  list-style: none;
  font-size: 1.1rem;
`;

const NavLinks = styled.div`
  display: grid;
  grid-template-columns: 12.5% repeat(4, 18.75%) 12.5%;
  grid-template-rows: 50px;
  text-align: center;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    letter-spacing: 0.1em;

    &:hover {
      color: #b0c4d4;
    }
  }

  @media (max-width: ${device.mobileL}) {
    display: none;
  }
`;

const Home = styled.a`
  grid-column: 2/3;
`;

const About = styled.a`
  grid-column: 3/4;
`;

const Projects = styled.a`
  grid-column: 4/5;
`;

const Contact = styled.a`
  grid-column: 5/6;
`;

const BurgerContainer = styled.div`
  display: none;

  @media (max-width: ${device.mobileL}) {
    display: block;
  }
`;
