import React from 'react';
import { toast } from 'react-toastify';
import Projects from '../components/Portfolio/Projects';
import useAxiosGet from '../hooks/useAxiosGet';


const Portfolio = () => {

    const url = `http://localhost:5000/apps`;

    const { projects, error } = useAxiosGet(url);

    if (error) {
        toast.error(error);
    }


    return (
        <div className='max-w-6xl mx-auto px-3 lg:px-0 my-10 md:my-7'>
            <Projects projects={projects} />
        </div>
    );
};

export default Portfolio;