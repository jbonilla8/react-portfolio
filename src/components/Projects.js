import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../shared/styles';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const buttonTypes = ["ALL", "REACT-JS", "DESIGN"];
  const [active, setActive] = useState(buttonTypes[0]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setProjects(data.projects));
  }, []);

  if (projects.length == 0) return false;



  return (
    <ProjectsWrapper id="projects">
      <Filters>
        {buttonTypes.map(type => (
          <ToggleButton active={active === type} onClick={() => setActive(type)}>
            {type}
          </ToggleButton>
        ))}
      </Filters>
      <TilesContainer>
        {projects
          .filter(project => active === 'ALL' || project.type.toLowerCase() === active.toLowerCase())
          .map(project => (
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
`;

const ToggleButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 0px;
  padding: 20px 40px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  outline: none;
  color: ${props => (props.active ? 'white' : 'black')};
  background-color: ${props => (props.active ? '#227C9D' : 'white')};

  @media (max-width: ${device.mobileL}) {
    font-size: 0.9rem;
    padding: 15px;
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

  img {
    width: 100%;
  }
`;