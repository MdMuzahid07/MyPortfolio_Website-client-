import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

const All_Blogs = () => {
    const clickHandler = () => {
        toast.error("This button not functional, there are no blogs available!");
    }
    return (
        <section className='bg-primary p-5 rounded flex justify-center items-center min-h-screen'>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>

                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>

                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>


                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>


                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>


                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>


                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>


                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>


                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>


                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>


                <div class="card h-80 card-compact bg-primary rounded shadow_red">
                    <figure>
                        <img src="https://placeimg.com/400/225/arch" alt="blog_logo" />
                    </figure>
                    <div class="card-body">
                        <div>
                            <h2 className="card-title">title</h2>
                        </div>
                        <div class="card-actions absolute -left-14 hover:left-2 transition bottom-5">
                            <button onClick={clickHandler} className="btn btn-secondary btn-outline rounded">Read Blog</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default All_Blogs;