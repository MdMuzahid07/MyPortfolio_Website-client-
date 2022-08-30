import React from 'react';
import All_Blogs from '../components/Blogs/All_Blogs';

const Blogs = () => {
    return (
        <div className='max-w-6xl mx-auto px-3 lg:px-0 my-10 md:my-7 text-secondary'>
            <h2 className='text-3xl font-bold underline custom-m-b-5'>My Blogs</h2>

            <div>
                <div class="btn-group btn-group-vertical absolute right-5 bottom-5 z-20">
                    <button class="btn btn-outline btn-secondary rounded">Tech News</button>
                    <button class="btn btn-outline btn-secondary rounded">JavaScript</button>
                    <button class="btn btn-outline btn-secondary rounded">ReactJS</button>
                    <button class="btn btn-outline btn-secondary rounded">NodeJS</button>
                    <button class="btn btn-outline btn-secondary rounded">Redux</button>
                    <button class="btn btn-outline btn-secondary rounded">Linux</button>
                    <button class="btn btn-outline btn-secondary rounded">All</button>
                </div>

                <All_Blogs />
            </div>

        </div>
    );
};

export default Blogs;