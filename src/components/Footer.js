import React from 'react';
import styled from 'styled-components';

const Footer = () => <FooterWrapper>&copy; Jalisa Bonilla 2020</FooterWrapper>;

export default Footer;

const FooterWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  background-color: #3c748e;
`;
