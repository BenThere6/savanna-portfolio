import React from 'react';
import './style.css';
import email_icon from '../assets/icons/email-icon.png';
import linkedin_icon from '../assets/icons/linkedin-icon.png';
import github_icon from '../assets/icons/github-icon.png';

const Footer = () => {
  return (
    <footer>
      <div className='icons'>
        <div className='center'>
          <a href="mailto:benjaminbirdsall@icloud.com" target="_blank" rel="noopener noreferrer">
            <img className='footer-icon' src={email_icon} alt='Email' title='Email' />
          </a>
          <a href="https://www.linkedin.com/in/benbirdsall" target="_blank" rel="noopener noreferrer">
            <img className='footer-icon' src={linkedin_icon} alt='LinkedIn' title='LinkedIn' />
          </a>
          <a href="https://github.com/benthere6" target="_blank" rel="noopener noreferrer">
            <img className='footer-icon' src={github_icon} alt='GitHub' title='GitHub' />
          </a>
        </div>
      </div>
      <div>&copy; {new Date().getFullYear()} Ben Birdsall</div>
    </footer>
  );
};

export default Footer;