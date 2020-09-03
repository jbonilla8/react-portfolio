import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'

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
        <div>{project.title}</div>
    )
}

export default ProjectPage;