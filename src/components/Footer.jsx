import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        {/* Add any additional footer content or links here */}
      </div>
    </footer>
  );
};

export default Footer;
