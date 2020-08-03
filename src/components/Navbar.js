import React from 'react';
import styled from 'styled-components';

const Navbar = () => (
  <NavWrapper>
    <NavContainer>
      <Home>
        <a href="#">Home</a>
      </Home>
      <About>
        <a href="#">About</a>
      </About>
      <ReactApps>
        <a href="#">React Apps</a>
      </ReactApps>
      <Designs>
        <a href="#">Designs</a>
      </Designs>
      <Contact>
        <a href="#">Contact</a>
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
  grid-template-columns: repeat(6, auto);
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

    &:hover {
      color: #b0c4d4;
    }
  }
`;

const Home = styled.div`
  grid-column: 1/2;
`;

const About = styled.div`
  grid-column: 2/3;
`;

const ReactApps = styled.div`
  grid-column: 3/4;
`;

const Designs = styled.div`
  grid-column: 4/5;
`;

const Contact = styled.div`
  grid-column: 5/6;
`;
