import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ app }) => {
    const { id, projectName, technology, logo } = app;

    const navigate = useNavigate();


    // console.log(ID);

    const handleOnClick = (id) => {
        navigate(`/projectInfo/${id}`);
    }

    return (
        <div class="card h-96 card-compact bg-primary rounded shadow_red">
            <figure>
                <img src={logo} alt="project_logo" />
            </figure>
            <div class="card-body">
                <div>
                    <h2 className="text-lg font-bold">{projectName}</h2>
                    <div className='text-xs'>
                        <p>Title: E-commerce website</p>
                        <p>Technology: {technology}</p>
                    </div>
                </div>
                <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                    <button onClick={() => handleOnClick(id)} className="btn btn-wide  btn-secondary btn-outline rounded">Project Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;