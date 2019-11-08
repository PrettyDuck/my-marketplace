import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <Link to='/policy' className='footer-content'>
        Copyright &copy; 2019. Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
