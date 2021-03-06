import React from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';
import PhoneIcon from '../images/icons/phone.png';
import EnvelopeIcon from '../images/icons/envelope.png';
import GitHubIcon from '../images/icons/github.png';

const Contact = () => (
  <ContactWrapper id="contact">
    <ContactContainer>
      <a href="tel:+1402-499-0590">
        <PhoneImg src={PhoneIcon} alt="image of a black phone icon" />
      </a>
      <PhoneLink href="tel:+1402-499-0590">+1 (402) 499-0590</PhoneLink>
      <a href="mailto:jalisabonilla10@gmail.com">
        <EmailImg src={EnvelopeIcon} alt="image of a black envelope icon" />
      </a>
      <EmailLink href="mailto:jalisabonilla10@gmail.com">
        jalisabonilla10@gmail.com
      </EmailLink>
      <a href="https://github.com/jbonilla8">
        <GitHubImg src={GitHubIcon} alt="image of a black GitHub icon" />
      </a>
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
  background-color: #fff;
  padding: 60px 0px;

  @media (min-width: ${device.tabletL}) {
    grid-template-rows: auto;
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
    font-weight: 700;
    font-size: 1rem;
    color: black;

    &:hover {
      color: #227C9D;
    }

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
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const PhoneLink = styled.a`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-bottom: 2rem;

  @media (min-width: ${device.tabletL}) {
    margin-bottom: 0;
  }
`;

const EmailImg = styled.img`
  grid-column: 1/2;
  grid-row: 3/4;
  max-width: 2.8rem;
  max-height: 2.2rem;
  cursor: pointer;

  @media (min-width: ${device.tabletL}) {
    grid-column: 2/3;
    grid-row: 1/2;
    width: 3rem;
    max-height: 2.8rem;
  }
`;

const EmailLink = styled.a`
  grid-column: 1/2;
  grid-row: 4/5;
  margin-bottom: 2rem;

  @media (min-width: ${device.tabletL}) {
    grid-column: 2/3;
    grid-row: 2/3;
    margin-bottom: 0;
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
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const GitHubLink = styled.a`
  grid-column: 1/2;
  grid-row: 6/7;
  margin-bottom: 2rem;

  @media (min-width: ${device.tabletL}) {
    grid-column: 3/4;
    grid-row: 2/3;
    margin-bottom: 0;
  }
`;
