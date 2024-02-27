import React from 'react';
import Nav from '../components/Nav';
import project_image from '../assets/project-image.png';
import habit_tracker from '../assets/habit-tracker.png';

const Projects = () => {
  return (
    <div className="projects page">
      <div className="page-content">
        <h2>My Projects</h2>
        <Nav />

        <div className="project" id='first-project'>
          <h3 className='project-name'>Habit Tracker</h3>
          <div className='center'>
            <img className='project-image' src={habit_tracker} alt='project-image'></img>
          </div>
          <p className='gray-text-container'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
            Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
          </p>
          <div className='center'>
            <div className='gray-container project-links'>
              <a href="#">View Project</a>
              <a href="#">View Repository</a>
            </div>
          </div>
        </div>

        <div className="project">
          <h3 className='project-name'>Movie Night Coordinator</h3>
          <div className='center'>
            <img className='project-image' src={project_image} alt='project-image'></img>
          </div>
          <p className='gray-text-container'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
            Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
          </p>
          <div className='center'>
            <div className='gray-container project-links'>
              <a href="#">View Project</a>
              <a href="#">View Repository</a>
            </div>
          </div>
        </div>

        <div className="project">
          <h3 className='project-name'>List Prioritizer</h3>
          <div className='center'>
            <img className='project-image' src={project_image} alt='project-image'></img>
          </div>
          <p className='gray-text-container'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
            Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
          </p>
          <div className='center'>
            <div className='gray-container project-links'>
              <a href="#">View Project</a>
              <a href="#">View Repository</a>
            </div>
          </div>
        </div>

        <div className="project">
          <h3 className='project-name'>Quiz App</h3>
          <div className='center'>
            <img className='project-image' src={project_image} alt='project-image'></img>
          </div>
          <p className='gray-text-container'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
            Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
          </p>
          <div className='center'>
            <div className='gray-container project-links'>
              <a href="#">View Project</a>
              <a href="#">View Repository</a>
            </div>
          </div>
        </div>

        <div className="project">
          <h3 className='project-name'>Auto Budgeter</h3>
          <div className='center'>
            <img className='project-image' src={project_image} alt='project-image'></img>
          </div>
          <p className='gray-text-container'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
            Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
          </p>
          <div className='center'>
            <div className='gray-container project-links'>
              <a href="#">View Repository</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
