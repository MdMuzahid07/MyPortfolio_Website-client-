import React from 'react';

const Navbar = ({ children }) => {
    return (
        <nav>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content bg-slate-100">
                    <label for="my-drawer-2" class="fixed top-5 left-5 bg-black text-primary p-2 z-50 rounded lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-7 h-7 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    {/* <!-- Page content here --> */}
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay" />
                    <ul class="menu p-4 overflow-y-auto w-80 text-base-content  bg-black text-white sticky top-0 left-0">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;