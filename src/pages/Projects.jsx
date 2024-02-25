import React from 'react';
import Nav from '../components/Nav';

const Projects = () => {
  return (
    <div className="projects page">
      <h2>My Projects</h2>
      <Nav />
      <div className="project">
        <h3>Project 1</h3>
        <p>
          {/* Add a brief description of your project */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus. 
          Integer euismod leo nec risus fermentum, ac eleifend velit consequat. 
        </p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>
          {/* Add a brief description of your project */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus. 
          Integer euismod leo nec risus fermentum, ac eleifend velit consequat. 
        </p>
        <a href="#">View Project</a>
      </div>
      {/* Add more project entries as needed */}
    </div>
  );
};

export default Projects;
