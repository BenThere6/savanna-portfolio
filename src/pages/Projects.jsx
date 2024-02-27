import React from 'react';
import Nav from '../components/Nav';
// import project_image from '../assets/project-image.png';
import habit_tracker from '../assets/habit-tracker.png';
import reel_delights_image from '../assets/reel-delights.png';
import priority_image from '../assets/priority.png';
import quiz_image from '../assets/quiz.png';
import budget_image from '../assets/budget.jpg';

const Projects = () => {
  return (
    <div className="page">
      <div className="page-content">
        <h2>My Projects</h2>
        <Nav />
        <div className='projects-container'>

          <div className="project" id='proj-one'>
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
                <a href="https://fierce-tor-16803-290b9f9ab8e3.herokuapp.com" target="_blank">View Project</a>
                <a href="https://github.com/BenThere6/habit-tracker" target="_blank">View Repository</a>
              </div>
            </div>
          </div>

          <div className="project" id='proj-two'>
            <h3 className='project-name'>Movie Night Coordinator</h3>
            <div className='center'>
              <img className='project-image' src={reel_delights_image} alt='project-image'></img>
            </div>
            <p className='gray-text-container'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
              Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
            </p>
            <div className='center'>
              <div className='gray-container project-links'>
                <a href="https://reel-delights.onrender.com/" target="_blank">View Project</a>
                <a href="https://github.com/MalkaGreenberg/reel-delights" target="_blank">View Repository</a>
              </div>
            </div>
          </div>

          <div className="project">
            <h3 className='project-name'>List Prioritizer</h3>
            <div className='center'>
              <img className='project-image' src={priority_image} alt='project-image'></img>
            </div>
            <p className='gray-text-container'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
              Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
            </p>
            <div className='center'>
              <div className='gray-container project-links'>
                <a href="https://benthere6.github.io/priority-web-app/" target="_blank">View Project</a>
                <a href="https://github.com/BenThere6/priority-web-app" target="_blank">View Repository</a>
              </div>
            </div>
          </div>

          <div className="project">
            <h3 className='project-name'>Quiz App</h3>
            <div className='center'>
              <img className='project-image' src={quiz_image} alt='project-image'></img>
            </div>
            <p className='gray-text-container'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
              Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
            </p>
            <div className='center'>
              <div className='gray-container project-links'>
                <a href="https://benthere6.github.io/code-quiz/" target="_blank">View Project</a>
                <a href="https://github.com/BenThere6/code-quiz" target="_blank">View Repository</a>
              </div>
            </div>
          </div>

          <div className="project">
            <h3 className='project-name'>Auto Budgeter</h3>
            <div className='center'>
              <img className='project-image' src={budget_image} alt='project-image'></img>
            </div>
            <p className='gray-text-container'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in aliquam purus.
              Integer euismod leo nec risus fermentum, ac eleifend velit consequat.
            </p>
            <div className='center'>
              <div className='gray-container project-links'>
                <a href="https://github.com/BenThere6/budgeter" target="_blank">View Repository</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
