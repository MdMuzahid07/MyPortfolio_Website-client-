import React from 'react';
import { Link } from 'react-router-dom';

const About_Me = () => {
    return (
        <section className='text-secondary flex justify-center items-center min-h-screen'>
            <div>
                <h2 className='text-3xl font-bold underline custom-m-b-5'>About Me</h2>
                <div>
                    <div className="grid lg:grid-cols-2 bg-primary text-secondary rounded-none w-full mt-7">
                        <div>
                            <img src="https://i.ibb.co/CttM5rX/Md-Muzahid.png" alt="profile_image" className='about_img border-2 border-secondary rounded bg-neutral opacity-50' />
                        </div>
                        <div className="text-secondary p-5">
                            <h2 className='text-xl font-bold my-10'>console.log( hello world! )</h2>
                            <h2 className='text-3xl mt-7'>Hi there</h2>
                            <p className='text-md font-bold mt-4'>{`
                            <> I'm a Web Developer, Works with MERN Stack, Front-end ,Back-end Development, and WordPress Website Design. My future goal is to be a full-stack native app developer. and I want to be a master in JavaScript.My first rule is, to be a good person,then a good Developer. </>
                            `}</p>

                            <div className='mt-10'>
                                <p>Birthday: Feb 06,2000</p>
                                <p>From: Dhaka, Bangladesh</p>
                                <p>Language: English, Hindi, Bengali</p>
                                <p>E-Mail : MdMuzahid7396@gmail.com</p>
                                <p>Freelance : Available</p>
                            </div>
                            <div className='mt-10'>
                                <Link to='/contact' className="btn btn-wide btn-outline btn-secondary ">Hire Me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About_Me;