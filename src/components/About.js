import React from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';

import ReactIcon from '../images/icons/tech/react2.png';
import JavaScriptIcon from '../images/icons/tech/javascript.png';
import JQueryIcon from '../images/icons/tech/jquery.png';
import HTML5Icon from '../images/icons/tech/html5.png';
import CSS3Icon from '../images/icons/tech/css3.png';
import SassIcon from '../images/icons/tech/sass.png';
import StyledCompIcon from '../images/icons/tech/styled.png';
import GitIcon from '../images/icons/tech/git.png';
import BootstrapIcon from '../images/icons/tech/bootstrap.png';
import CsharpIcon from '../images/icons/tech/csharp.png';
import PhotoshopIcon from '../images/icons/tech/photoshop.png';
import FigmaIcon from '../images/icons/tech/figma.png';

const About = () => (
  <AboutWrapper id="about">
    <Text>
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
          Some Technologies I have worked with:
        </P3>
        <TechIconsContainer>
          <ReactImg src={ReactIcon} alt="image of React framework icon" />
          <JavaScriptImg src={JavaScriptIcon} alt="image of JavaScript language icon" />
          <JQueryImg src={JQueryIcon} alt="image of JQuery library icon" />
          <HTML5Img src={HTML5Icon} alt="image of HTML5 language icon" />
          <CSS3Img src={CSS3Icon} alt="image of CSS3 language icon" />
          <SassImg src={SassIcon} alt="image of Sass preprocessor scripting language icon" />
          <StyledCompImg src={StyledCompIcon} alt="image of Styled Components icon" />
          <GitImg src={GitIcon} alt="image of Git icon" />
          <BootstrapImg src={BootstrapIcon} alt="image of Bootstrap icon" />
          <CsharpImg src={CsharpIcon} alt="image of C# language icon" />
          <PhotoshopImg src={PhotoshopIcon} alt="image of Photoshop icon" />
          <FigmaImg src={FigmaIcon} alt="image of Figma icon" />
        </TechIconsContainer>
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
  padding: 100px 0;
`;

const Text = styled.div`
  grid-column: 2/3;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2.2rem;

  @media (max-width: ${device.tabletL}) {
    font-size: 1rem;
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

const TechIconsContainer = styled.div`
  grid-column: 1/span 3;
  grid-row: 3/4;

  @media (max-width: ${device.tabletL}) {
    grid-column: 1/span 3;
    grid-row: 4/5;
  }
`;

const ReactImg = styled.img`
  width: 105px;
`;

const JavaScriptImg = styled.img`
  width: 67px;
  margin-right: 20px;
`;

const JQueryImg = styled.img`
  width: 175px;
  margin-right: 20px;
`;

const HTML5Img = styled.img`
  width: 72px;
  margin-right: 20px;
`;

const CSS3Img = styled.img`
  width: 51px;
  margin-right: 20px;
`;

const SassImg = styled.img`
  width: 89px;
  margin-right: 20px;
`;

const StyledCompImg = styled.img`
  width: 75px;
  margin-right: 20px;
`;

const GitImg = styled.img`
  width: 100px;
  margin-right: 20px;
`;

const BootstrapImg = styled.img`
  width: 72px;
  margin-right: 20px;
`;

const CsharpImg = styled.img`
  width: 72px;
  margin-right: 20px;
`;

const PhotoshopImg = styled.img`
  width: 72px;
  margin-right: 20px;
`;

const FigmaImg = styled.img`
  width: 45px;
`;

