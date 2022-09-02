import React from 'react';
import Project from '../../components/Portfolio/Project';

const Projects = ({ projects }) => {
    return (
        <section className='text-secondary'>
            <h2 className='text-3xl font-bold underline custom-m-b-5'>My Portfolio</h2>
            <div className='flex justify-center items-center min-h-screen'>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>

                    {
                        projects?.map((app) => <Project key={app._id} app={app} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default Projects;