import React from 'react';
/* import logosvg from './asset/logosvg1.svg'
import copy from './asset/copy.svg' */
import './Footer.css';

const Footer = () => {
  return (
   <footer>
    <div className="footer-content">
        <img className='logo' /* src={logosvg} */ alt="Logo" />
        <img className='copy' /* src={copy} */ alt="copyray" />
    </div>
   </footer>

  )
};

export default Footer;