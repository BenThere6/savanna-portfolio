import React from 'react';
import Nav from '../components/Nav';

const About = () => {
  return (
    <div className="about page">
      <div className='page-content'>
        <h2>About Me</h2>
        <Nav />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
          Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
          Integer quis felis aliquet, aliquam leo sit amet, laoreet turpis.
        </p>
      </div>
    </div>
  );
};

export default About;
