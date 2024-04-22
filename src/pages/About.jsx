import React from 'react';
import Nav from '../components/Nav';
import headshot from '../assets/savanna-headshot.jpg';

const About = () => {
  return (
    <div className="about page">
      <div className='page-content'>
        <h2>About Me</h2>
        <Nav />
        <div id="headshot-circle">
          <img id='headshot' src={headshot} alt="Photo of Ben Birdsall" />
        </div>
        <div className='p-container gray-text-container'>
          <p>
            I'm Savanna Birdsall, a recent graduate from Brigham Young University with a degree in Public Relations. My time at BYU has honed my skills in communication and relationship building, preparing me for a dynamic career in the field.
          </p>
          <p>
            Outside of academics, I'm deeply passionate about singing, dancing, and reading. Music and movement are my creative outlets, allowing me to express myself freely, while books offer me endless opportunities for learning and exploration. I thrive on new experiences and connections, always seeking to grow and embrace the richness of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
