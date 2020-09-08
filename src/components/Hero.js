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
  color: #227C9D;
  font-size: 1.6rem;
  margin-top: 2rem;
  letter-spacing: 0.1rem;

  @media (max-width: ${device.tabletL}) {
    font-size: 1.4rem;
  }
`;

const HeroButton = styled.button`
  color: white;
  cursor: pointer;
  background-color: #A72592;
  margin-top: 2rem;
  border: none;
  border-radius: 0px;
  outline: none;
  width: 220px;
  height: 60px;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;

  &:hover {
    background-color: #972183;
  }

  @media (max-width: ${device.mobileL}) {
    width: 180px;
    height: 50px;
    font-size: 1.1rem;
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
