import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../shared/styles';
import Modal from './Modal';
// import TetrisThumbnail from '../images/thumbnails/tetris.png';
// import SweetBeatsThumbnail from '../images/thumbnails/sweetbeats.png';
// import MovieFinderThumbnail from '../images/thumbnails/movieFinder.png';
// import CalendarAppThumbnail from '../images/thumbnails/calendarApp.png';
// import QuestOverlandThumbnail from '../images/thumbnails/questOverland.png';
// import MqualThumbnail from '../images/thumbnails/mqual.png';
// import GranolaThumbnail from '../images/thumbnails/granola.png';
// import SugarPopThumbnail from '../images/thumbnails/sugarPop.png';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  if (projects.length == 0) return false;

  return (
    <ProjectsWrapper id="projects">
      <Filters>
        <button>ALL</button>
        <button>REACT-JS</button>
        <button>DESIGNS</button>
      </Filters>
      <TilesContainer>
      {projects.map(project => (
        <Tile key={project.id}>
          <img src={`${project.thumbnailImg}`} alt={project.description} />
        </Tile>
      ))}
        {/* 
        
        <Tile onClick={() => setShowDetails(!showDetails)}>
          <img src={MovieFinderThumbnail} alt="thumbnail of MovieFinder project" />
          <DetailsContainer showDetails={showDetails}>
            <h2>Movie Finder</h2>
            <p>React / Styled Components / Node.js</p>
            <button onClick={setShowModal}>LEARN MORE</button>
          </DetailsContainer>
        </Tile>
        <Tile onClick={() => setShowDetails(!showDetails)}>
          <img src={CalendarAppThumbnail} alt="thumbnail of eCalendar project" />
          <DetailsContainer showDetails={showDetails}>
            <h2>eCalendar</h2>
            <p>React / Styled Components</p>
            <button onClick={setShowModal}>LEARN MORE</button>
          </DetailsContainer>
        </Tile>
         */}
      </TilesContainer>
      <Modal showModal={showModal} />
    </ProjectsWrapper>
  )
};

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
      // background-color: #3c748e;
      background-color: #369ccc;
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
  position: relative;
  display: flex;

  img {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  position: absolute;
  color: black;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: auto;
  z-index: 100;
  display: ${props => (props.showDetails ? 'block' : 'none')};
  background-color: rgba(255, 255, 255, 0.9);

  h2 {
    padding-top: 100px;
  }

  button {
    cursor: pointer;
    border: 2px solid black;
    padding: 10px 20px;
    outline: none;
  }
`;