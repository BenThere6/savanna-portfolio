import React from 'react';
import './style.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content center">
        <p>&copy; {new Date().getFullYear()} Ben Birdsall</p>
      </div>
    </footer>
  );
};

export default Footer;
