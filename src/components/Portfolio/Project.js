import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ app }) => {

    const { projectName, technology, description, logo } = app;
    console.log(app)
    return (
        <div class="card h-96 card-compact bg-primary rounded shadow_red">
            <figure>
                <img src={logo} alt="project_logo" />
            </figure>
            <div class="card-body">
                <div>
                    <h2 className="card-title">{projectName}</h2>
                    <p>Title</p>
                    <p>Technology: {technology}</p>
                    <p>Description: {description}</p>
                </div>
                <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                    <Link to="/project" className="btn btn-wide  btn-secondary btn-outline rounded">Project Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;