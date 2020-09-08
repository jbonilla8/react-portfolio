import React from 'react';
import styled from 'styled-components';

const VerticalNavMenu = ({ open }) => {

    return (
        <VerticalNavContainer open={open} >
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </VerticalNavContainer >
    )
}

export default VerticalNavMenu;

const VerticalNavContainer = styled.div`
  position: relative;
  display: ${props => (props.open ? 'grid' : 'none')};
  width: 100%;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  z-index: 10;
  background-color: black;
  justify-items: center;
  flex-wrap: nowrap;
  line-height: 3rem;
  padding: 3rem 0;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: white;
    }
`;

