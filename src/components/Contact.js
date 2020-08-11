import React from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';
import PhoneIcon from '../images/icons/phone.png';
import EnvelopeIcon from '../images/icons/envelope.png';
import GitHubIcon from '../images/icons/github.png';

const Contact = () => (
  <ContactWrapper id="contact">
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
  background-color: #dedede;
  padding: 20px 0;

  @media (min-width: ${device.tabletL}) {
    grid-template-rows: auto;
    padding: 50px 0;
  }
`;

const ContactContainer = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(6, auto);
  row-gap: 20px;
  align-items: center;
  justify-items: center;

  a {
    text-decoration: none;
    color: #3c748e;
    font-weight: 700;
    font-size: 0.9rem;

    @media (min-width: ${device.tablet}) {
      font-size: 1.1rem;
    }
  }

  @media (min-width: ${device.tabletL}) {
    grid-template-columns: repeat(3, 30%);
    column-gap: 5%;
    grid-template-rows: auto auto;
    row-gap: 15px;
  }
`;

const PhoneImg = styled.img`
  grid-column: 1/2;
  grid-row: 1/2;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;

  @media (min-width: ${device.tabletL}) {
    width: 3rem;
    height: 3rem;
  }
`;

const PhoneLink = styled.a`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const EmailImg = styled.img`
  grid-column: 1/2;
  grid-row: 3/4;

  max-width: 3.6rem;
  max-height: 2.8rem;
  cursor: pointer;

  @media (min-width: ${device.tabletL}) {
    grid-column: 2/3;
    grid-row: 1/2;
  }
`;

const EmailLink = styled.a`
  grid-column: 1/2;
  grid-row: 4/5;

  @media (min-width: ${device.tabletL}) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

const GitHubImg = styled.img`
  grid-column: 1/2;
  grid-row: 5/6;
  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;

  @media (min-width: ${device.tabletL}) {
    grid-column: 3/4;
    grid-row: 1/2;
    width: 3rem;
    height: 3rem;
  }
`;

const GitHubLink = styled.a`
  grid-column: 1/2;
  grid-row: 6/7;

  @media (min-width: ${device.tabletL}) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
`;
