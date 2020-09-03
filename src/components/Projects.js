import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../shared/styles';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setProjects(data.projects));
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
          <Link to={`/project/${project.id}`}>
            <Tile key={project.id}>
              <img src={`${project.thumbnailImg}`} alt={project.alt} />
            </Tile>
          </Link>
        ))}
      </TilesContainer>
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
  margin: 0 1rem;
  justify-content: space-around;

  button {
    cursor: pointer;
    background-color: white;
    color: black;
    border: none;
    border-radius: 0px;
    padding: 20px 40px;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.2rem;
    outline: none;

    &:focus, &:active {
      color: white;
      background-color: #00BCD4;
    }

    @media (max-width: ${device.mobileL}) {
      font-size: 0.9rem;
      padding: 15px;
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