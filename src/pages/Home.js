import React from 'react';

const Home = () => {
    return (
        <main className='max-w-6xl mx-auto px-3 lg:px-0 flex justify-center items-center min-h-screen'>
            <div className="grid lg:grid-cols-2 bg-primary text-secondary rounded-none w-full">
                <div>
                    <img src="https://placeimg.com/400/400/arch" alt="profile_img" className='profile_img rounded-lg' />
                </div>
                <div className="text-secondary p-4">
                    <h2 className='text-xl font-bold my-10'>console.log( hello world! )</h2>
                    <h2 className='text-3xl'>I'm</h2>
                    <h2 className='text-4xl font-bold my-4'>Md. Muzahid</h2>
                    <div>
                        <button className="btn btn-wide btn-outline btn-secondary mt-7">Download Resume</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;