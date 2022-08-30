import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Review = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className='text-secondary my-20'>
            <h2 className='text-3xl font-bold underline mb-7'>Testimonials</h2>
            <Slider {...settings}>
                <div>
                    <div class="card w-96 shadow-xl rounded">
                        <div class="card-body  shadow_red bg-primary relative">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <span className='absolute h-10 w-10 bg-primary -bottom-5 inset-x-1/2  rotate-45 -ml-5'></span>
                        </div>
                        <div className='mt-11 flex justify-center'>
                            <div>
                                <div class="avatar">
                                    <div class="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
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
        </div>
    );
};

export default Review;