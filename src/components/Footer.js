import React from 'react';
import styled from 'styled-components';

const Footer = () => <FooterWrapper>&copy; Jalisa Bonilla 2020</FooterWrapper>;

export default Footer;

const FooterWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #444;
  background-color: #ededed;
`;
