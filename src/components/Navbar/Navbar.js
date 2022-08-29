import React from 'react';
import Footer from '../Footer/Footer';

const Navbar = ({ children }) => {
    return (
        <nav>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-100">
                    <label for="my-drawer-2" className="fixed top-5 left-5 z-50 p-2 bg-primary border-2 border-secondary drop-shadow text-secondary rounded-full lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-10 h-10 stroke-current font-bold"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay" />
                    <ul className="menu overflow-y-auto w-80 text-base-content  bg-black text-white font-bold">
                        {/* <!-- Sidebar content here --> */}
                        <li>
                            <a href="/#">Home</a>
                        </li>

                        <li>
                            <a href="/#">About</a>
                        </li>

                        <li>
                            <a href="/#">Services</a>
                        </li>

                        <li>
                            <a href="/#">Portfolio</a>
                        </li>

                        <li>
                            <a href="/#">Contact</a>
                        </li>


                        <li className='absolute bottom-5 hidden md:block'>
                            <Footer />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;