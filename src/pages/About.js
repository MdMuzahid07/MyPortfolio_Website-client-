import React from 'react';
import About_Me from '../components/About/About_Me';
import Review from '../components/About/Review';
import Services from '../components/About/Services';
import Skills from '../components/About/Skills';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-3 lg:px-0 my-10 md:my-7">
            <About_Me />
            <Services />
            <Skills />
            <Review />
        </div>
    );
};

export default About;