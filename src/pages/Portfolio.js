import React from 'react';
import Projects from '../components/Portfolio/Projects';
import useAxiosGet from '../hooks/useAxiosGet';


const Portfolio = () => {

    const url = `projects.json`;

    const { projects } = useAxiosGet(url);


    return (
        <div className='max-w-6xl mx-auto px-3 lg:px-0 my-10 md:my-7'>
            <Projects projects={projects} />
        </div>
    );
};

export default Portfolio;