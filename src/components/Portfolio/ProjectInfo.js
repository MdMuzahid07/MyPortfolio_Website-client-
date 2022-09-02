import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from 'react-router-dom';
import useAxiosGet from '../../hooks/useAxiosGet';
import { toast } from 'react-toastify';

const ProjectInfo = () => {

    const { id } = useParams();

    const url = `http://localhost:5000/apps/${id}`;

    const { projects, error } = useAxiosGet(url);
    const { projectName, technology, usedTechnology, adminDashboard, liveSite, clientCode, serverCode, description, snapshot1, snapshot2, snapshot3 } = projects;

    if (error) {
        toast.error(error);
    }

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
                    initialSlide: 1
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
                <h2 className='text-3xl mt-7'>Project Name: {projectName} </h2>

                <div className='custom-m-h-t-5'>
                    <Slider{...settings} arrows={false}>

                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src={snapshot1} alt="reviewer_image" />
                            </div>
                        </div>

                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src={snapshot2} alt="reviewer_image" />
                            </div>
                        </div>

                        <div className='px-2 bg-primary'>
                            <div className="card rounded border border-secondary">
                                <img src={snapshot3} alt="reviewer_image" />
                            </div>
                        </div>

                    </Slider>
                </div>

                <div className='custom-m-h-t-5'>

                    <h2 className='text-3xl mb-5'>Project Details</h2>

                    <div className='font-bold'>
                        <h2>Project Title: ElectroShop</h2>
                        <h2 className='my-2'>Technology: {technology}</h2>
                        <h2>Used Technologies: {usedTechnology}</h2>
                        <h2 className='my-2'>Admin Dashboard Access: {adminDashboard}</h2>
                    </div>

                    <p>Description: {description}</p>

                    <div className='my-4'>
                        <div class="btn-group">
                            <a href={clientCode} target="_blank" rel="noreferrer" class="btn btn-outline btn-secondary rounded">Client Code</a>
                            <a href={serverCode} target="_blank" rel="noreferrer" class="btn btn-outline btn-secondary rounded">Server Code</a>
                            <a href={liveSite} target="_blank" rel="noreferrer" class="btn btn-secondary rounded">Visit</a>
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