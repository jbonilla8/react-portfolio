import React from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';
import MovieFinderThumbnail from '../images/thumbnails/movieFinder.png';
import CalendarAppThumbnail from '../images/thumbnails/calendarApp.png';
import QuestOverlandThumbnail from '../images/thumbnails/questOverland.png';
import MqualThumbnail from '../images/thumbnails/mqual.png';
import GranolaThumbnail from '../images/thumbnails/granola.png';
import SugarPopThumbnail from '../images/thumbnails/sugarPop.png';

const Projects = () => (
  <ProjectsWrapper id="projects">
    <Filters>
      <button>ALL</button>
      <button>REACT-JS</button>
      <button>DESIGNS</button>
    </Filters>
    <TilesContainer>
      <Tile>
        <img src={MovieFinderThumbnail} alt="thumbnail of MovieFinder project" />
      </Tile>
      <Tile>
        <img src={CalendarAppThumbnail} alt="thumbnail of eCalendar project" />
        </Tile>
      <Tile>
        <img src={QuestOverlandThumbnail} alt="thumbnail of Quest Overland design project" />
      </Tile>
      <Tile>
        <img src={MqualThumbnail} alt="thumbnail of Mqual design project" />
      </Tile>
      <Tile>
        <img src={GranolaThumbnail} alt="thumbnail of Peace Lovin' Granola project" />
      </Tile>
      <Tile><img src={SugarPopThumbnail} alt="thumbnail of Sugar Pop Bakery design project" /></Tile>
    </TilesContainer>
  </ProjectsWrapper>
);

export default Projects;

const ProjectsWrapper = styled.div`
`;

const Filters = styled.div`
  display: flex;
  color: black;
  padding-top: 50px;
  padding-bottom: 25px;
  justify-content: space-around;

  button {
    cursor: pointer;
    background-color: white;
    color: black;
    border: none;
    border-radius: 0px;
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    outline: none;

    &:focus, &:active {
      color: white;
      background-color: #3c748e;
    }

    @media (max-width: ${device.mobileL}) {
      font-size: 0.8rem;
      padding: 10px 25px;
    }
  }
`;

const TilesContainer = styled.div`
  display: grid;
  max-width: 100vw;
  margin: 0 1rem;
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, auto); 
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, auto); 
  }
`;

const Tile = styled.div`
  cursor: pointer;

  img {
    width: 100%;
  }
`;