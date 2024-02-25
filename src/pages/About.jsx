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
        <div className='p-container'>
          <p>
            Hello! I'm a Full Stack Web Developer, with more familiarity in backend development. My coding journey began with Python, where I developed a love for building automation scripts. This passion led me to pivot from account management to technology, culminating in completing a Full Stack Web Development program at Rutgers.
          </p>
          <p>
            In my work, I embrace Agile Development principles, focusing on adaptability and efficient progress. My approach is all about creating efficient, maintainable solutions that meet user needs effectively. Outside of coding, I'm an outdoor enthusiast and always eager to try new things, a reflection of my constant pursuit of personal and professional growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
