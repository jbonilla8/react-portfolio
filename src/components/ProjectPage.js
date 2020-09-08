import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import styled from 'styled-components';
import { device } from '../shared/styles';

const ProjectPage = () => {

    const { id } = useParams();
    const [project, setProject] = useState();

    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(data => {
                setProject(data.projects.find(x => x.id == id))
            });
    }, []);

    if (project === undefined) {
        return (<div></div>)
    }
    return (
        // add link to github for projects with repos
        <ProjectPageWrapper>
            <Header>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
            </Header>
            <Main>
                <Summary>
                    {project.summary}
                </Summary>
                {project.type === 'react' ? <img src={`${project.thumbnailImg}`} alt={project.alt} /> : <img src={`${project.mockup}`} alt={project.mockupAlt} />}

                {project.hasLiveSite ? <a href={project.siteAddress} target="_blank" rel="noopener">
                    <SiteButton>View Live Site</SiteButton>
                </a> : null}
            </Main>
        </ProjectPageWrapper>
    )
}

export default ProjectPage;

const ProjectPageWrapper = styled.div`
`;

const Header = styled.div`
    background-color: black;
    padding: 50px 0px;
`;

const Title = styled.div`
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.5rem;
    color: #00BCD4;
`;

const Description = styled.div`
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.2rem;
    color: white;
    text-transform: uppercase;
`;

const Main = styled.div`
    display: grid;
    justify-content: center;
    padding: 50px 25px;

    img {
        margin-bottom: 50px;
        max-width: 80vw;
        border: 4px solid black;
        justify-self: center;
    }

    a {
        justify-self: center;
    }

    @media (min-width: ${device.mobileL}) {
        padding: 50px;
    }

    @media (min-width: ${device.tablet}) {
        padding: 50px 100px;
    }

    @media (min-width: ${device.tabletM}) {
        padding: 50px 150px;
    }

    @media (min-width: ${device.laptop}) {
        padding: 50px 200px;
    }

    @media (min-width: ${device.laptopM}) {
        padding: 50px 250px;
    }
`;

const Summary = styled.div`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2.5rem;
    padding-bottom: 50px;
`;

const SiteButton = styled.button`
    cursor: pointer;
    outline: none;
    width: 220px;
    height: 60px;
    border: none;
    background-color: #A72592;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    color: white;

    &:hover {
        background-color: #972183;
    }
`;