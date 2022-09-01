import React from 'react';
import { useState } from 'react';
import Projects from '../components/Portfolio/Projects';
const axios = require('axios');


const Portfolio = () => {
    const [projects, setProjects] = useState([]);


    const url = `projects.json`;

    const getProjects = async () => {
        await axios.get(url)
            .then((response) => {
                const allProjects = response.data;
                setProjects(allProjects);
            })
            .catch((error) => console.error(error));
    }
    getProjects();


    return (
        <div className='max-w-6xl mx-auto px-3 lg:px-0 my-10 md:my-7'>
            <Projects projects={projects} />
        </div>
    );
};

export default Portfolio;