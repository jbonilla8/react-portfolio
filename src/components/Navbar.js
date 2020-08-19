import React from 'react';
import styled from 'styled-components';

const Navbar = (props) => (
  <NavWrapper>
    <NavContainer isSticky={props.isSticky}>
      <Home href="#home">Home</Home>
      <About href="#about">About</About>
      <Projects href="#projects">Projects</Projects>
      <Contact href="#contact">Contact</Contact>
    </NavContainer>
  </NavWrapper>
);

export default Navbar;

const NavWrapper = styled.div`
  position: relative;
`;

const NavContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 12.5% repeat(4, 18.75%) 12.5%;
  grid-template-rows: 50px;
  background-color: black;
  z-index: 1000;
  left: 0;
  right: 0;

  position: ${props => (props.isSticky ? 'fixed' : 'absolute')};
  bottom: ${props => (props.isSticky ? 'revert' : '0')};
  top: ${props => (props.isSticky ? '0' : 'revert')};

  height: 50px;
  list-style: none;
  text-align: center;
  align-items: center;
  font-size: 1.1rem;

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    letter-spacing: 0.1em;

    &:hover {
      color: #b0c4d4;
    }
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
