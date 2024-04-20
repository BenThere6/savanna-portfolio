import React from 'react';
import Nav from '../components/Nav';
import headshot from '../assets/100_0029.jpeg';

const About = () => {
  return (
    <div className="about page">
      <div className='page-content'>
        <h2>About Me</h2>
        <Nav />
        <div id="headshot-circle">
          <img id='headshot' src={headshot} alt="Photo of Ben Birdsall"/>
        </div>
        <div className='p-container gray-text-container'>
          <p>
            
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
