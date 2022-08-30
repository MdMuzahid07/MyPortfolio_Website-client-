import React from 'react';
import All_Blogs from '../components/Blogs/All_Blogs';

const Blogs = () => {
    return (
        <div className='max-w-6xl mx-auto px-3 lg:px-0 my-10 md:my-7 text-secondary'>
            <h2 className='text-3xl font-bold underline custom-m-b-5'>My Blogs</h2>

            <div>
                <All_Blogs />
            </div>

        </div>
    );
};

export default Blogs;