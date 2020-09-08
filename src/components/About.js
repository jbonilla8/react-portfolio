import React from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';

const About = () => (
  <AboutWrapper id="about">
    <Text>
      <AboutContainer>
        <P1>
          From the design to coding stage, I create websites that offer responsive and intuitive user experiences. My professional background includes contributing to the development of banking software and marketing websites. I am constantly expanding my knowledge of web related technologies and design. <span>Below are some frameworks, languages, and tools I have worked with:</span>
        </P1>
        <P2>
          I am originally from Nebraska but have just recently moved to Florida. I am loving the sunshine state! In my spare time I love to read novels, go on nature hikes, and practice photography.
        </P2>
      </AboutContainer>
    </Text>
  </AboutWrapper>
);

export default About;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: auto;
  background-color: #ededed;
  padding-top: 100px;
  padding-bottom: 20px;
`;

const Text = styled.div`
  grid-column: 2/3;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2.2rem;

  span {
    font-weight: 700;
  }

  @media (max-width: ${device.tabletL}) {
    font-size: 1.1rem;
  }
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 47.5% 47.5%;
  grid-template-rows: auto auto auto;
  column-gap: 5%;
`;

const P1 = styled.p`
  grid-column: 1/2;
  grid-row: 1/2;

  @media (max-width: ${device.tabletL}) {
    grid-column: 1/span 2;
  }
`;

const P2 = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;

  @media (max-width: ${device.tabletL}) {
    grid-column: 1/span 2;
    grid-row: 2/3;
  }
`;