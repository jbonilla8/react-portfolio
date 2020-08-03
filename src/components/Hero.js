import React, { Fragment } from 'react';
import styled from 'styled-components';
import HeroImage from '../images/workdesk.jpg';
import Profile from '../images/profile.jpg';

const Hero = () => (
  <Fragment>
    <HeroContainer>
      <LeftPanel>
        <ProfilePic src={Profile} alt="Photo of Jalisa Bonilla" />
        <HeroText>
          Hi, my name is Jalisa. I'm a Front End Web Developer & Designer.
        </HeroText>
        <HeroButton>See My Work</HeroButton>
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
`;

const HeroButton = styled.button`
  color: white;
  cursor: pointer;
  background-color: #9a447c;
  margin-top: 2rem;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;

  &:hover {
    background-color: #71335B;
  }
`;

const RightPanel = styled.div`
  grid-column: 2/3;
  overflow: hidden;
  justify-self: center;
  width: 100%;
`;
