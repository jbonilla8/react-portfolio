import React from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';

const About = () => (
  <AboutWrapper id="about">
    <Text>
      <AboutContainer>
        <P1>
            I create captivating websites that offer responsive and intuitive user
            experiences. I am originally from Nebraska but currently reside in
            Florida. I am really diggin the sunshine state! Vivamus egestas felis a tortor vulputate suscipit. Pellentesque at libero nec odio condimentum ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </P1>
        <P2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus egestas felis a tortor vulputate suscipit. I am constantly expanding my knowledge of web related technologies and design. Below are some I have worked with:
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

  @media (max-width: ${device.mobileL}) {
    padding: 50px 0;
  }
`;

const Text = styled.div`
  grid-column: 2/3;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2.2rem;

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