import React from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';

const About = () => (
  <AboutWrapper id="about">
    <Text>
      <h1>About</h1>
      <AboutContainer>
        <P1>
          I create captivating websites that offer responsive and intuitive user
          experiences. I am originally from Nebraska but just recently moved to
          Florida. So far, I am really diggin the sunshine state!
        </P1>
        <P2>
          I am constantly expanding my knowledge of web related technologies and
          design.
        </P2>
        <P3>
          Here are some technologies I have worked with: React, JavaScript,
          jQuery, HTML5, CSS, SASS, Styled Components, Git, Bootstrap, C#, WPF,
          ASP.NET, Visual Basic, Microsoft SSRS, Microsoft Office, Adobe
          Photoshop, Figma
        </P3>
      </AboutContainer>
    </Text>
  </AboutWrapper>
);

export default About;

const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: auto;
  background-color: #ededed;
`;

const Text = styled.div`
  padding: 50px 0;
  grid-column: 2/3;

    font-weight: 500;
    font-size: 1.2rem;
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
  grid-column: 1/2;
  grid-row: 2/3;

  @media (max-width: ${device.tabletL}) {
    grid-column: 1/span 2;
  }
`;

const P3 = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;

  @media (max-width: ${device.tabletL}) {
    grid-column: 1/span 2;
    grid-row: 3/4;
  }
`;
