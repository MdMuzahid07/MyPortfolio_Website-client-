import React from 'react';

const Services = () => {
    return (
        <div className='my-20 text-secondary'>

            <h2 className='text-3xl font-bold underline mb-7'>Services</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>

                <div class="card card-compact bg-base-100 shadow-xl rounded">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Service_card" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Front-end</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl rounded">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Service_card" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Back-end</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl rounded">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Service_card" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">MERN Stack</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl rounded">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Service_card" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">WordPress</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl rounded">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Service_card" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">PSD to HTML5</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card card-compact bg-base-100 shadow-xl rounded">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Service_card" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">React Native</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;