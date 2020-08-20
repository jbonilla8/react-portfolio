import React, { Fragment } from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';
import HeroImage from '../images/workdesk.jpg';
import Profile from '../images/profile.jpg';

const Hero = (props) => (
  <Fragment>
    <HeroContainer ref={props.heroOuterContainerRef} id="home">
      <LeftPanel>
        <ProfilePic src={Profile} alt="Photo of Jalisa Bonilla" />
        <HeroText>
          Hi, my name is Jalisa. I'm a Front End Web Developer & Designer.
        </HeroText>
        <a href="#projects">
          <HeroButton>See My Work</HeroButton>
        </a>
      </LeftPanel>
      <RightPanel>
        <img src={HeroImage} alt="Desk area with plant, notebook, and laptop" />
      </RightPanel>
    </HeroContainer>
  </Fragment>
);

export default Hero;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100vh;

  @media (max-width: ${device.laptopM}) {
    grid-template-columns: auto;
  }
`;

const LeftPanel = styled.div`
  grid-column: 1/2;
  text-align: center;
  align-self: center;
  margin: 0 45px;
`;

const ProfilePic = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
`;

const HeroText = styled.div`
  color: #3c748e;
  font-weight: 500;
  font-size: 1.8rem;
  margin-top: 2rem;

  @media (max-width: ${device.tabletL}) {
    font-size: 1.4rem;
  }
`;

const HeroButton = styled.button`
  color: white;
  cursor: pointer;
  background-color: #902A64;
  margin-top: 2rem;
  border: none;
  border-radius: 0px;
  outline: none;
  padding: 12px 24px;
  font-size: 1.2rem;

  &:hover {
    background-color: #0F5257;
  }
`;

const RightPanel = styled.div`
  display: flex;
  grid-column: 2/3;
  overflow: hidden;
  justify-self: center;
  width: 100%;
  background: linear-gradient(#94afba, #8da8b3);

  @media (max-width: ${device.laptopM}) {
    display: none;
  }

  img {
    width: 100%;
  }
`;
