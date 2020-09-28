import React from 'react';
import styled, { keyframes } from 'styled-components';

const load8 = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(82, 23, 81, 0.2);
  border-right: 1.1em solid rgba(82, 23, 81, 0.2);
  border-bottom: 1.1em solid rgba(82, 23, 81, 0.2);
  border-left: 1.1em solid #521751;
  transform: translateZ(0);
  animation: ${load8} 1.1s infinite linear;
  border-radius: 50%;
  width: 10em;
  height: 10em;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

const spinner = () => <Loader>Loading...</Loader>;

export default spinner;
