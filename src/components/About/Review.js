import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Review = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='text-secondary my-20 z-20'>
            <h2 className='text-3xl font-bold underline custom-m-b-5'>Testimonials</h2>
            <Slider{...settings} arrows={false}>

                <div className='px-2 bg-accent'>
                    <div className="card rounded">
                        <div className="card-body h-32  shadow_red bg-primary relative">
                            <p className='text-xs font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sit.</p>
                            <span className='absolute h-10 w-10 bg-primary -bottom-5 inset-x-1/2  rotate-45 -ml-5'></span>
                        </div>
                        <div className='mt-11 flex justify-center'>
                            <div>
                                <div className="avatar">
                                    <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                                    </div>
                                </div>
                                <div className='font-bold text-center'>
                                    <h2 className='text-xl'>Name</h2>
                                    <p>title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='px-2 bg-accent'>
                    <div className="card rounded">
                        <div className="card-body h-32  shadow_red bg-primary relative">
                            <p className='text-xs font-bold'>If a dog chews shoes whose shoes does he choose?</p>
                            <span className='absolute h-10 w-10 bg-primary -bottom-5 inset-x-1/2  rotate-45 -ml-5'></span>
                        </div>
                        <div className='mt-11 flex justify-center'>
                            <div>
                                <div className="avatar">
                                    <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                                    </div>
                                </div>
                                <div className='font-bold text-center'>
                                    <h2 className='text-xl'>Name</h2>
                                    <p>title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='px-2 bg-accent'>
                    <div className="card rounded">
                        <div className="card-body h-32  shadow_red bg-primary relative">
                            <p className='text-xs font-bold'>If a dog chews shoes whose shoes does he choose?</p>
                            <span className='absolute h-10 w-10 bg-primary -bottom-5 inset-x-1/2  rotate-45 -ml-5'></span>
                        </div>
                        <div className='mt-11 flex justify-center'>
                            <div>
                                <div className="avatar">
                                    <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                                    </div>
                                </div>
                                <div className='font-bold text-center'>
                                    <h2 className='text-xl'>Name</h2>
                                    <p>title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='px-2 bg-accent'>
                    <div className="card rounded">
                        <div className="card-body h-32  shadow_red bg-primary relative">
                            <p className='text-xs font-bold'>If a dog chews shoes whose shoes does he choose?</p>
                            <span className='absolute h-10 w-10 bg-primary -bottom-5 inset-x-1/2  rotate-45 -ml-5'></span>
                        </div>
                        <div className='mt-11 flex justify-center'>
                            <div>
                                <div className="avatar">
                                    <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                                    </div>
                                </div>
                                <div className='font-bold text-center'>
                                    <h2 className='text-xl'>Name</h2>
                                    <p>title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-2 bg-accent'>
                    <div className="card rounded">
                        <div className="card-body h-32  shadow_red bg-primary relative">
                            <p className='text-xs font-bold'>If a dog chews shoes whose shoes does he choose?</p>
                            <span className='absolute h-10 w-10 bg-primary -bottom-5 inset-x-1/2  rotate-45 -ml-5'></span>
                        </div>
                        <div className='mt-11 flex justify-center'>
                            <div>
                                <div className="avatar">
                                    <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                                    </div>
                                </div>
                                <div className='font-bold text-center'>
                                    <h2 className='text-xl'>Name</h2>
                                    <p>title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-2 bg-accent'>
                    <div className="card rounded">
                        <div className="card-body h-32  shadow_red bg-primary relative">
                            <p className='text-xs font-bold'>If a dog chews shoes whose shoes does he choose?</p>
                            <span className='absolute h-10 w-10 bg-primary -bottom-5 inset-x-1/2  rotate-45 -ml-5'></span>
                        </div>
                        <div className='mt-11 flex justify-center'>
                            <div>
                                <div className="avatar">
                                    <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                                    </div>
                                </div>
                                <div className='font-bold text-center'>
                                    <h2 className='text-xl'>Name</h2>
                                    <p>title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='px-2 bg-accent'>
                    <div className="card rounded">
                        <div className="card-body h-32  shadow_red bg-primary relative">
                            <p className='text-xs font-bold'>If a dog chews shoes whose shoes does he choose?</p>
                            <span className='absolute h-10 w-10 bg-primary -bottom-5 inset-x-1/2  rotate-45 -ml-5'></span>
                        </div>
                        <div className='mt-11 flex justify-center'>
                            <div>
                                <div className="avatar">
                                    <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                        <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                                    </div>
                                </div>
                                <div className='font-bold text-center'>
                                    <h2 className='text-xl'>Name</h2>
                                    <p>title</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </section>
    );
};

export default Review;