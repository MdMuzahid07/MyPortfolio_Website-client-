import React from 'react';
import About_Me from '../components/About/About_Me';
import Services from '../components/About/Services';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-3 lg:px-0 my-10 md:my-7">
            <About_Me />
            <Services />
        </div>
    );
};

export default About;