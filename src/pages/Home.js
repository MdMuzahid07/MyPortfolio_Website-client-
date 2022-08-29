import React from 'react';
import TypingText from '../components/Home/TypingText';

const Home = () => {
    return (
        <main className='max-w-6xl mx-auto px-3 lg:px-0 flex justify-center items-center min-h-screen my-10 md:my-0'>
            <div className="grid lg:grid-cols-2 bg-primary text-secondary rounded-none w-full">
                <div>
                    <img src="https://img.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg?w=740&t=st=1661782352~exp=1661782952~hmac=dcf5f61124dc5f7f0ae495ffbb12ee7ea51257006982d566699db1c4fed27242" alt="profile_img" className='profile_img rounded-lg' />
                </div>
                <div className="text-secondary p-4 mt-20">
                    <h2 className='text-xl font-bold my-7'>console.log( hello world! )</h2>
                    <h2 className='text-3xl mt-20'>I'm</h2>
                    <h2 className='text-4xl font-bold my-4'>Md. Muzahid</h2>
                    <TypingText />
                    <div className='mt-10'>
                        <button className="btn btn-wide btn-outline btn-secondary ">Download Resume</button>
                    </div>
                </div>
            </div>
        </main >
    );
};

export default Home;