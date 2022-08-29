import React from 'react';
import ReactTyped from 'react-typed';

const TypingText = () => {
    return (
        <ReactTyped className='text-2xl font-bold'
            strings={["I'm a Front-end Developer", "I'm a Back-end Developer", "I'm a MERN Stack Developer", "I'm a WordPress Designer"]}
            typeSpeed={70}
            backSpeed={40}
            backDelay={7}
            loop
            smartBackspace
        />
    );
};

export default TypingText;