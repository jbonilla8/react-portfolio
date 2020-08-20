import React from 'react';
import styled from 'styled-components';
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
      <Tile1 src={MovieFinderThumbnail} />
      <Tile2 src={CalendarAppThumbnail} />
      <Tile3 src={QuestOverlandThumbnail} />
      <Tile4 src={MqualThumbnail} />
      <Tile5 src={GranolaThumbnail} />
      <Tile6 src={SugarPopThumbnail} />
    </TilesContainer>
  </ProjectsWrapper>
);

export default Projects;

const ProjectsWrapper = styled.div`
  margin: 50px;
`;

const Filters = styled.div`
  display: flex;
  color: black;
  padding-bottom: 25px;
  justify-content: space-around;

  button {
    cursor: pointer;
    background-color: white;
    color: black;
    border: none;
    border-radius: 0px;
    padding: 15px 40px;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    outline: none;

    &:focus, .active {
      color: white;
      background-color: #0F5257;
    }
  }
`;

const TilesContainer = styled.div`
display: grid;
overflow: hidden;
height: 650px;
grid-template-columns: repeat(3, 33.33%);
grid-template-rows: repeat(2, 50%);
justify-content: center;
justify-items: center;
background-color: black;

img { 
  width: 100%;
  height: 100%;

    &:hover {
      webkit-filter: blur(4px); /* Chrome, Safari, Opera */
      filter: blur(4px);
    }
}
`;

const Tile1 = styled.img`
  cursor: pointer;
  grid-column: 1/2;
  grid-row: 1/2;
`;

const Tile2 = styled.img`
  cursor: pointer;
  grid-column: 2/3;
  grid-row: 1/2;
`;

const Tile3 = styled.img`
  cursor: pointer;
  grid-column: 3/4;
  grid-row: 1/2;
`;

const Tile4 = styled.img`
  cursor: pointer;
  grid-column: 1/2;
  grid-row: 2/3;
`;

const Tile5 = styled.img`
  cursor: pointer;
  grid-column: 2/3;
  grid-row: 2/3;
`;

const Tile6 = styled.img`
  cursor: pointer;
  grid-column: 3/4;
  grid-row: 2/3;
`;





