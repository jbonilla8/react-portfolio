import React from 'react';
import styled from 'styled-components';

const Navbar = () => (
  <NavWrapper>
    <NavContainer>
      <Home>
        <a href="#">Home</a>
      </Home>
      <About>
        <a href="#about">About</a>
      </About>
      <ReactApps>
        <a href="#reactapps">React Apps</a>
      </ReactApps>
      <Designs>
        <a href="#designs">Designs</a>
      </Designs>
      <Contact>
        <a href="#contact">Contact</a>
      </Contact>
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
  grid-template-columns: 12.5% repeat(5, 15%) 12.5%;
  grid-template-rows: 50px;
  background-color: black;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

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

const Home = styled.div`
  grid-column: 2/3;
`;

const About = styled.div`
  grid-column: 3/4;
`;

const ReactApps = styled.div`
  grid-column: 4/5;
`;

const Designs = styled.div`
  grid-column: 5/6;
`;

const Contact = styled.div`
  grid-column: 6/7;
`;
