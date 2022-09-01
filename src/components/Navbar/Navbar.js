import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Social_icons from '../social_icons/Social_icons';

const Navbar = ({ children }) => {
    return (
        <nav>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-accent">
                    <label htmlFor="my-drawer-2" className="fixed top-5 left-5 z-50 p-2 bg-accent border-2 border-secondary drop-shadow text-secondary rounded-full lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current font-bold"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay" />
                    <ul className="menu overflow-y-auto w-80 text-base-content  bg-primary font-bold uppercase border-r border-dashed border-secondary">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <h2 className='Profile_Name'>Muzahid</h2>
                        </li>

                        <li>
                            <Link to="/" href="/#" className='text-white'>Home</Link>
                        </li>

                        <li>
                            <Link to="/about" href="/#" className='text-white'>About</Link>
                        </li>

                        <li>
                            <Link to="/portfolio" href="/#" className='text-white'>Portfolio</Link>
                        </li>

                        <li>
                            <Link to="/blog" href="/#" className='text-white'>Blog</Link>
                        </li>

                        <li>
                            <Link to="/contact" href="/#" className='text-white'>Contact</Link>
                        </li>

                        <li className='absolute bottom-40 px-4 block'>
                            <Link to='/contact' className='btn btn-secondary btn-outline rounded'>Hire Me</Link>
                        </li>

                        <li className='absolute bottom-20'>
                            <Social_icons />
                        </li>

                        <li className='absolute bottom-5'>
                            <Footer />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;