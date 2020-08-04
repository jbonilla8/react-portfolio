import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '../images/icons/phone.png';
import EnvelopeIcon from '../images/icons/envelope.png';
import GitHubIcon from '../images/icons/github.png';

const Contact = () => (
  <ContactWrapper>
    <ContactContainer>
      <PhoneImg src={PhoneIcon} alt="image of a black phone icon" />
      <PhoneLink href="tel:+1402-499-0590">+1 (402) 499-0590</PhoneLink>
      <EmailImg src={EnvelopeIcon} alt="image of a black envelope icon" />
      <EmailLink href="mailto:jalisabonilla10@gmail.com">
        jalisabonilla10@gmail.com
      </EmailLink>
      <GitHubImg src={GitHubIcon} alt="image of a black GitHub icon" />
      <GitHubLink href="https://github.com/jbonilla8">
        https://github.com/jbonilla8
      </GitHubLink>
    </ContactContainer>
  </ContactWrapper>
);

export default Contact;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: auto;
  height: 150px;
  background-color: #dedede;
  padding: 50px 0;
`;

const ContactContainer = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: auto auto;
  align-items: center;
  justify-items: center;

  a {
    text-decoration: none;
    color: #3c748e;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const PhoneImg = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 3rem;
  height: 3rem;
`;

const PhoneLink = styled.a`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const EmailImg = styled.img`
  grid-column: 2/3;
  grid-row: 1/2;
  width: 3.6rem;
  height: 2.8rem;
`;

const EmailLink = styled.a`
  grid-column: 2/3;
  grid-row: 2/3;
`;

const GitHubImg = styled.img`
  grid-column: 3/4;
  grid-row: 1/2;
  width: 3rem;
  height: 3rem;
`;

const GitHubLink = styled.a`
  grid-column: 3/4;
  grid-row: 2/3;
`;
