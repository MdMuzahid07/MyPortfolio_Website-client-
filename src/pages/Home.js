import React from 'react';

const Home = () => {
    return (
        <main className='max-w-6xl mx-auto px-3 md:px-0'>
            <div class="grid lg:grid-cols-2 bg-neutral text-secondary rounded-none w-full card-h mt-7">
                <div>
                    <img src="https://placeimg.com/400/400/arch" alt="profile_img" className='profile_img' />
                </div>
                <div class="text-secondary p-4">
                    <h2>New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;