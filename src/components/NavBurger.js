import React from 'react';
import styled from 'styled-components';

const NavBurger = ({ open, setOpen }) => {
  return (
    <NavBurgerButton open={open} onClick={() => setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </NavBurgerButton>
  );
};

export default NavBurger;

const NavBurgerButton = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  margin: 0.5rem 0.5rem 0 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: 1.9rem;
    height: 0.2rem;
    background: white;
    transition: transform 0.25s, opacity 0.25s;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
