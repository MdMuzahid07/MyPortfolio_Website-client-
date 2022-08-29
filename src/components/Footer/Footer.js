import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <h2 className='text-xs text-white'>Copyright ©{currentYear} All rights reserved by Md.Muzahid</h2>
        </footer>
    );
};

export default Footer;
