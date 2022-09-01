import React from 'react';
import Form from './Form';
import Info from './Info';
import Map from './Map';

const ContactForm = () => {
    return (
        <section className='flex justify-center items-center min-h-screen w-full'>

            <div>
                <h2 className='text-3xl font-bold underline custom-m-b-5'>Contact Me</h2>
                <div className='bg-primary p-5 rounded w-full'>
                    <div className='grid md:grid-cols-2 gap-5 my-10'>
                        <Form />
                        <Info />
                    </div>
                    <div className="mt-20 mb-10">
                        <Map />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactForm;