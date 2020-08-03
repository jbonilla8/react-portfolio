import React from 'react';
import styled from 'styled-components';

const Contact = () => (
  <ContactWrapper>
    <ContactContainer>
      <Phone>Phone</Phone>
      <Email>Email</Email>
      <GitHub>GitHub</GitHub>
    </ContactContainer>
  </ContactWrapper>
);

export default Contact;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: auto;
  height: 200px;
`;

const ContactContainer = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: auto;
  justify-items: center;
`;

const Phone = styled.div`
  grid-column: 1/2;
`;

const Email = styled.div`
  grid-column: 2/3;
`;

const GitHub = styled.div`
  grid-column: 3/4;
`;
