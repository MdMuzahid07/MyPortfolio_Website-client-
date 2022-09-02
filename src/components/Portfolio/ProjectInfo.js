import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';

const ProjectInfo = () => {

    const { ID } = useParams();

    console.log(ID);


    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <section className='max-w-6xl mx-auto px-3 lg:px-0 my-10 md:my-7 text-secondary'>

            <div className='bg-primary rounded p-5'>
                <h2 className='text-3xl mt-7'>Project Name: </h2>

                <div className='custom-m-h-t-5'>
                    <Slider{...settings} arrows={false}>

                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                            </div>
                        </div>

                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                            </div>
                        </div>

                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                            </div>
                        </div>


                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                            </div>
                        </div>


                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                            </div>
                        </div>

                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                            </div>
                        </div>


                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src="https://placeimg.com/192/192/people" alt="reviewer_image" />
                            </div>
                        </div>

                    </Slider>
                </div>

                <div className='custom-m-h-t-5'>

                    <h2 className='text-3xl mb-5'>Project Details</h2>

                    <div className='font-bold'>
                        <h2>Project Title: ElectroShop</h2>
                        <h2 className='my-2'>Technology: MERN Stack</h2>
                        <h2>Used Technologies: MERN</h2>
                        <h2 className='my-2'>Admin Dashboard Access: electroAdmin@gmail.com</h2>
                    </div>

                    <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quibusdam obcaecati sint optio itaque laudantium provident repellat voluptate, pariatur quasi, maxime vitae eligendi amet nulla dignissimos, dolorem molestias. Officiis facilis dolorum deleniti odit, perspiciatis, quis odio ad dolores quam fugiat modi accusamus distinctio ullam unde placeat voluptate quasi sunt eligendi.</p>

                    <div className='my-4'>
                        <div class="btn-group">
                            <button class="btn btn-outline btn-secondary rounded">Client Code</button>
                            <button class="btn btn-outline btn-secondary rounded">Server Code</button>
                            <button class="btn btn-secondary rounded">Visit</button>
                        </div>
                    </div>

                    <ul className='text-xs'>
                        <li>
                            <h2 className='text-3xl my-5'>Key Features</h2>
                        </li>
                        <li className='mb-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid excepturi optio nam, hic iure provident consequatur dignissimos alias praesentium?
                        </li>

                        <li className='mb-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid excepturi optio nam, hic iure provident consequatur dignissimos alias praesentium?
                        </li>

                        <li className='mb-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid excepturi optio nam, hic iure provident consequatur dignissimos alias praesentium?
                        </li>


                        <li className='mb-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid excepturi optio nam, hic iure provident consequatur dignissimos alias praesentium?
                        </li>

                        <li className='mb-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid excepturi optio nam, hic iure provident consequatur dignissimos alias praesentium?
                        </li>

                        <li className='mb-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid excepturi optio nam, hic iure provident consequatur dignissimos alias praesentium?
                        </li>

                        <li className='mb-2'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid excepturi optio nam, hic iure provident consequatur dignissimos alias praesentium?
                        </li>
                    </ul>

                </div>

            </div>
        </section>
    );
};

export default ProjectInfo;