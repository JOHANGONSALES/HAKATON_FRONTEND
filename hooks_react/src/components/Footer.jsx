import React from 'react';
import Logosvg from '../assets/logosvg1.svg'
import Copy from '../assets/copy.svg'
import './Footer.css';

const Footer = () => {
  return (
   <footer>
    <div className="footer-content">
        <img className='logo' src={Logosvg} alt="Logo de la empresa Marketech" />
        <img className='copy' src={Copy} alt="copyright de la empresa Marketech" />
    </div>
   </footer>

  )
};

export default Footer