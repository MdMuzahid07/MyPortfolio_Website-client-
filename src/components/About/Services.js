import React from 'react';

const Services = () => {
    return (
        <div className='custom-m-h-t-15 text-secondary flex justify-center items-center min-h-screen'>
            <div>
                <h2 className='text-3xl font-bold underline custom-m-b-5'>Services</h2>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    <div className="card card-compact bg-primary shadow-xl rounded">
                        <figure>
                            <div className="avatar">
                                <div className="w-48 rounded-full mt-7 grayscale hover:grayscale-0 border-2 border-accent">
                                    <img src="https://res.cloudinary.com/jerrick/image/upload/v1652100443/62790d5bf1bb6000201ec695.png" alt="service_card" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl">Front-end</h2>
                            <p>Front-end UI/UX Development</p>
                        </div>
                    </div>

                    <div className="card card-compact bg-primary shadow-xl rounded">
                        <figure>
                            <div className="avatar">
                                <div className="w-48 rounded-full mt-7 grayscale hover:grayscale-0 border-2 border-accent">
                                    <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png" alt="service_card" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl">Back-end</h2>
                            <p>Backend-end server Development</p>
                        </div>
                    </div>

                    <div className="card card-compact bg-primary shadow-xl rounded">
                        <figure>
                            <div className="avatar">
                                <div className="w-48 rounded-full mt-7 grayscale hover:grayscale-0 border-2 border-accent">
                                    <img src="https://d1h9h5g2pln59q.cloudfront.net/MERN_Stack_Hero_bc2119602a.png" alt="service_card" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl">MERN Stack</h2>
                            <p>MERN Stack Development</p>
                        </div>
                    </div>



                    <div className="card card-compact bg-primary shadow-xl rounded">
                        <figure>
                            <div className="avatar">
                                <div className="w-48 rounded-full mt-7 grayscale hover:grayscale-0 border-2 border-accent">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Wordpress_Blue_logo.png/1200px-Wordpress_Blue_logo.png" alt="service_card" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl">WordPress</h2>
                            <p>Fully Functional WordPress Website Design</p>
                        </div>
                    </div>


                    <div className="card card-compact bg-primary shadow-xl rounded">
                        <figure>
                            <div className="avatar">
                                <div className="w-48 rounded-full mt-7 grayscale hover:grayscale-0 border-2 border-accent">
                                    <img src="https://www.thedreamsteps.com/system/static/frontend/img/html_5.png" alt="service_card" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl">PSD to HTML5</h2>
                            <p>PSD/ Adobe XD/ Figma to HTML</p>
                        </div>
                    </div>



                    <div className="card card-compact bg-primary shadow-xl rounded">
                        <figure>
                            <div className="avatar">
                                <div className="w-48 rounded-full mt-7 grayscale hover:grayscale-0 border-2 border-accent">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TeOivn22dJpzoPlaC-21UtoHZSa6rKhlfw&usqp=CAU" alt="service_card" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body text-center">
                            <h2 className="text-2xl">React Native</h2>
                            <p>Cross platform mobile app using react native</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;