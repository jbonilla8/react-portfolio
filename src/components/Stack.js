import React from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';

import ReactIcon from '../images/icons/tech/react2.png';
import JavaScriptIcon from '../images/icons/tech/javascript.png';
import JQueryIcon from '../images/icons/tech/jquery.png';
import HTML5Icon from '../images/icons/tech/html5.png';
import CSS3Icon from '../images/icons/tech/css3.png';
import SassIcon from '../images/icons/tech/sass.png';
import StyledCompIcon from '../images/icons/tech/styled2.png';
import GitIcon from '../images/icons/tech/git.png';
import BootstrapIcon from '../images/icons/tech/bootstrap.png';
import CsharpIcon from '../images/icons/tech/csharp.png';
import PhotoshopIcon from '../images/icons/tech/photoshop.png';
import FigmaIcon from '../images/icons/tech/figma.png';

const Stack = () => {
    return (
        <TechIconsContainer id="stack">
            <Cards>
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
            </Cards>
        </TechIconsContainer>
    )
}

export default Stack;

const TechIconsContainer = styled.div`
  background-color: #ededed;
  padding-bottom: 100px;
  text-align: center;
  justify-self: center;

  h1 {
      color: white;
  }
`;

const Cards = styled.div`
display: grid;
max-width: 100vw;
margin: 0 1rem;
grid-gap: 1rem;
justify-content: center;
justify-items: center;

grid-template-columns: repeat(2, 1fr); 

@media (min-width: 600px) {
  grid-template-columns: repeat(4, 1fr); 
}

@media (min-width: 1200px) {
  grid-template-columns: repeat(6, 1fr); 
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