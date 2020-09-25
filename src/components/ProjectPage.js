import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router'
import styled from 'styled-components';
import { device } from '../shared/styles';
import BackHomeIcon from '../images/icons/backhome.png';

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
        <Fragment>
            <Header>
                <a href="/">
                    <Home src={BackHomeIcon} alt="image of house with curved arrow to go back to home page" />
                </a>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
            </Header>
            <Main>
                {project.id === 2 ||  project.id === 3 ?
                    <Summary>
                        <SectionHeader>Summary</SectionHeader>
                        <TextWrapper>{project.summary}</TextWrapper>
                        <SectionHeader>Tech Used</SectionHeader>
                        <TextWrapper>
                            {project.tech.map(item =>
                                <BulletPoint>
                                    <Square />
                                    <Sentence>{item}</Sentence>
                                </BulletPoint>
                            )}
                        </TextWrapper>
                        <SectionHeader>Features</SectionHeader>
                        <TextWrapper>
                            {project.features.map(item =>
                                <BulletPoint>
                                    <Square />
                                    <Sentence>{item}</Sentence>
                                </BulletPoint>
                            )}
                        </TextWrapper>
                        <SectionHeader>Responsibilities</SectionHeader>
                        <TextWrapper>
                            {project.responsibilities.map(item =>
                                <BulletPoint>
                                    <Square />
                                    <Sentence>{item}</Sentence>
                                </BulletPoint>
                            )}
                        </TextWrapper>
                    </Summary>
                    :
                    <Summary>
                        {project.summary.map(sentence =>
                            <BulletPoint>
                                <Square />
                                <Sentence>{sentence}</Sentence>
                            </BulletPoint>
                        )}
                    </Summary>
                }

                <ButtonsContainer>
                    {project.hasGitHubRepo ? <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                        <GitHubButton aria-label={`${project.gitHubBtnAriaLabel}`}>GitHub</GitHubButton>
                    </a> : null}

                    {project.hasLiveSite ? <a href={project.siteAddress} target="_blank" rel="noopener noreferrer">
                        <SiteButton aria-label={`${project.liveSiteBtnAriaLabel}`}>View Live Site</SiteButton>
                    </a> : null}

                    {project.hasFigmaMockup ? <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                        <FigmaButton aria-label={`${project.figmaBtnAriaLabel}`}>Figma</FigmaButton>
                    </a> : null}
                </ButtonsContainer>

                <ProjectImage>
                    {project.type === 'react-js' ?
                        <ReactImage>
                            <img src={`${project.thumbnailImg}`} alt={project.alt} />
                        </ReactImage>
                        :
                        <DesignImage>
                            <img src={`${project.mockup}`} alt={project.mockupAlt} />
                        </DesignImage>
                    }
                </ProjectImage>
            </Main>
        </Fragment>
    )
}

export default ProjectPage;

const Header = styled.div`
    height: 190px;
    display: flex;
    flex-flow: column;
    background-color: black;
    justify-content: center;
    align-items: center;

    a {
        color: white;
        margin-left: auto;
        margin-right: 2.5rem;
        margin-bottom: 1rem;

        @media (max-width: ${device.mobileL}) {
            margin-right: 2rem;
        }
    }
`;

const Home = styled.img`
    width: 2.5rem;

    @media (max-width: ${device.mobileL}) {
        width: 2rem;
    }
`;

const Title = styled.div`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    color: #00BCD4;
`;

const Description = styled.div`
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    color: white;
    text-transform: uppercase;
`;

const Main = styled.div`
    display: grid;
    padding: 50px 150px;
    row-gap: 1rem;
        
    img {
        margin-bottom: 50px;
    }

    @media (max-width: ${device.tabletL}) {
        padding: 50px;
    }
`;

const Summary = styled.div`
    font-size: 1.3rem;
    font-weight: 400;
    place-self: center;
    list-style: none;
    line-height: 2rem;

    @media (max-width: ${device.mobileL}) {
        line-height: 1.6rem;
    }
    
    @media (max-width: ${device.tabletL}) {
        font-size: 1.1rem;
    }
`;

const SectionHeader = styled.h3`
    font-size: 1.2rem;
    margin: 0;
    color: #777;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
`;

const TextWrapper = styled.div`
    margin-left: 2rem;
    margin-bottom: 1rem;

    li {
        margin-bottom: 0;
    }
`;

const BulletPoint = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    align-items: baseline;
    justify-content: flex-start;
`;

const Square = styled.div`
    height: 13px;
    width: 13px;
    margin-right: 1rem;
    background-color: #00BCD4;

    @media (max-width: ${device.tabletL}) {
        height: 10px;
        width: 10px;
    }
`;

const Sentence = styled.li`
    margin-bottom: 1rem;

    @media (max-width: ${device.mobileL}) {
        margin-bottom: 0.6rem;
    }
`;

const ButtonsContainer = styled.div`
    display: grid;
    text-align: center;
    column-gap: 0.5rem;
    
    @media (min-width: ${device.tabletM}) {
        display: inline-flex;
        justify-self: center;
    }
    
    a {
        button {
            cursor: pointer;
            outline: none;
            width: 220px;
            height: 60px;
            border: none;
            font-size: 1.2rem;
            letter-spacing: 0.1rem;
            color: white;
            font-weight: 400;
            margin-bottom: 0.5rem;
        }
    }
`;

const SiteButton = styled.button`
    background-color: #A72592;

    &:hover {
        background-color: #972183;
    }
    
    @media (min-width: ${device.tabletM}) {
        margin-right: 0.5rem;
    }
`;

const GitHubButton = styled.button`
    background-color: #000;
    
    &:hover {
        background-color: #333;
    }
    
    @media (min-width: ${device.tabletM}) {
        margin-right: 0.5rem;
    }
`;

const FigmaButton = styled.button`
    background-color: #0183B7;
    
    &:hover {
        background-color: #01668E;
    }
`;

const ProjectImage = styled.div`
    justify-self: center;
    margin-top: 0.5rem;
`;

const ReactImage = styled.div`
    img {
        max-width: 50vw;

        @media (max-width: ${device.tabletM}) {
            max-width: 80vw;
        }
    }
`;

const DesignImage = styled.div`
    img {
        max-width: 80vw;
        border: 4px solid black;
    }
`;