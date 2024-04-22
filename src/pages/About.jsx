import React from 'react';
import Nav from '../components/Nav';
import headshot from '../assets/savanna-headshot.jpg';

const About = () => {
  return (
    <div className="about page">
      <div className='page-content'>
        <div>
          <h2 className='white-fade-background'>About Me</h2>
        </div>
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
        <h3 id='resume-title'>Resume</h3>
        <div className='p-container gray-text-container'>
          <h4>
            Education
          </h4>
          <p>
            This is the education
          </p>
          <h4>
            Work Experience
          </h4>
          <p>
            This is the work experience
          </p>
          <h4>
            Skills
          </h4>
          <p>
            This is the skill section
          </p>
          <h4>
            Certifications
          </h4>
          <p>
            This is the certifications section
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
