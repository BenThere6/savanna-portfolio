import React from 'react';
import './style.css';
import email_icon from '../assets/icons/email-icon.png';
import linkedin_icon from '../assets/icons/linkedin-icon.png';

const Footer = () => {
  return (
    <footer>
      <div className='icons'>
        <div className='center'>
          <a href="mailto:savannabirdsall1@gmail.com" target="_blank" rel="noopener noreferrer">
            <img className='footer-icon' src={email_icon} alt='Email' title='savannabirdsall1@gmail.com' />
          </a>
          <a href="https://www.linkedin.com/in/savanna-birdsall-024692272" target="_blank" rel="noopener noreferrer">
            <img className='footer-icon' src={linkedin_icon} alt='LinkedIn' title='LinkedIn' />
          </a>
        </div>
      </div>
      <div>&copy; {new Date().getFullYear()} Savanna Birdsall</div>
    </footer>
  );
};

export default Footer;