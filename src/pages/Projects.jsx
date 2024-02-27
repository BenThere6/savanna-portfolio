import React from 'react';
import Nav from '../components/Nav';
import habit_tracker from '../assets/habit-tracker.png';
import reel_delights_image from '../assets/reel-delights.png';
import priority_image from '../assets/priority.png';
import weather_dashboard_image from '../assets/weather.png';
import budget_image from '../assets/budget.jpg';
import python_icon from '../assets/icons/python-icon.png';
import react_icon from '../assets/icons/react-icon.png';
import mongodb_icon from '../assets/icons/mongodb-icon.svg';
import mysql_icon from '../assets/icons/mysql-icon.jpg';
import graphql_icon from '../assets/icons/graphql-icon.png';
import nodejs_icon from '../assets/icons/nodejs.png';
import vite_icon from '../assets/icons/vite-icon.svg';
import js_icon from '../assets/icons/js-icon.png';
import html_icon from '../assets/icons/html-icon.png';
import css_icon from '../assets/icons/css-icon.png';
import handlebars_icon from '../assets/icons/handlebars-icon.png';

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
            <div className='gray-text-container proj-paragraph'>
              <p>This application is crafted to assist users in overcoming detrimental habits while fostering beneficial ones. It tracks and displays data about ongoing streaks or the most recent occurrence of a particular habit.</p>
              <p>Additionally, it offers a personalized journal feature, enabling users to document their experiences and progress related to their habits. In their journal entries, users have the option to link to any of their habits for more contextual insights.</p>
              <p>Developed using Node.js and Express.js for the backend, Handlebars for templating, and MySQL for database management, this app integrates robust technologies to ensure a smooth user experience.</p>
            </div>
            <div className='icons'>
              <div className='icons-container'>
                <img className='icon gray-container' src={nodejs_icon} alt='technology-icon'></img>
                <img className='icon gray-container' src={handlebars_icon} alt='technology-icon'></img>
                <img className='icon gray-container' src={mysql_icon} alt='technology-icon'></img>
              </div>
            </div>
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
            <div className='gray-text-container proj-paragraph'>
              <p>This application offers a unique platform for organizing 'movie mingles', enabling users to easily arrange online movie watching sessions with friends and family. Once invited, participants receive an email notification and can view the event's details, including the date, time, and selected movie.</p>
              <p>It also includes a feature for browsing through a comprehensive movie catalog, allowing users to choose the perfect film for their gathering.</p>
              <p>Developed with React and Vite for a seamless frontend experience, GraphQL for efficient data handling, and MongoDB for robust database management, this app is designed for optimal user engagement and ease of use.</p>
            </div>
            <div className='icons'>
              <div className='icons-container'>
                <img className='icon gray-container' src={react_icon} alt='technology-icon'></img>
                <img className='icon gray-container' src={vite_icon} alt='technology-icon'></img>
                <img className='icon gray-container' src={graphql_icon} alt='technology-icon'></img>
                <img className='icon gray-container' src={mongodb_icon} alt='technology-icon'></img>
              </div>
            </div>
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
            <div className='gray-text-container proj-paragraph'>
              <p>This application is designed to streamline the organization of any list. Users can input their items, and the app guides them through a simplified process of making focused comparisons. Based on these inputs, it generates a comprehensively sorted list tailored to the user's preferences.</p>
              <p>Additionally, users have the convenience of accessing all their previously sorted lists at any time.</p>
              <p>Constructed using HTML, CSS, and JavaScript, this application combines functionality with an intuitive user interface.</p>
            </div>
            <div className='icons'>
              <div className='icons-container'>
                <img className='icon gray-container' src={html_icon} alt='technology-icon'></img>
                <img className='icon gray-container' src={css_icon} alt='technology-icon'></img>
                <img className='icon gray-container' src={js_icon} alt='technology-icon'></img>
              </div>
            </div>
            <div className='center'>
              <div className='gray-container project-links'>
                <a href="https://benthere6.github.io/priority-web-app/" target="_blank">View Project</a>
                <a href="https://github.com/BenThere6/priority-web-app" target="_blank">View Repository</a>
              </div>
            </div>
          </div>

          <div className="project">
            <h3 className='project-name'>Weather Dashboard</h3>
            <div className='center'>
              <img className='project-image' src={weather_dashboard_image} alt='project-image'></img>
            </div>
            <div className='gray-text-container proj-paragraph'>
              <p>This application provides a user-friendly platform for searching weather conditions in any city. It delivers real-time and 5-day forecasts, including temperature, wind speed, humidity, and visual weather icons.</p>
              <p>For convenience, it also displays a list of recent searches for quick reference in the future.</p>
              <p>Built with HTML, CSS, JavaScript, and integrated APIs, this application offers a seamless and informative weather-checking experience.</p>
            </div>
            <div className='icons'>
              <div className='icons-container'>
                <img className='icon gray-container' src={html_icon} alt='technology-icon'></img>
                <img className='icon gray-container' src={css_icon} alt='technology-icon'></img>
                <img className='icon gray-container' src={js_icon} alt='technology-icon'></img>
              </div>
            </div>
            <div className='center'>
              <div className='gray-container project-links'>
                <a href="https://benthere6.github.io/weather_dashboard/" target="_blank">View Project</a>
                <a href="https://github.com/BenThere6/weather_dashboard" target="_blank">View Repository</a>
              </div>
            </div>
          </div>

          <div className="project">
            <h3 className='project-name'>Auto Budgeter</h3>
            <div className='center'>
              <img className='project-image' src={budget_image} alt='project-image'></img>
            </div>
            <div className='gray-text-container proj-paragraph'>
              <p>Prior to studying web development, I created a script that streamlined my financial management. It automatically retrieved transaction details from emails sent by my bank, categorized them, and updated my personalized budget workbook with this new information.</p>
              <p>Whenever additional input was required from me, the script conveniently sent a text message to request the necessary details, storing my responses for future use.</p>
              <p>For an in-depth look at the script's functionality, please refer to the README in the repository.</p>
              <p>This project was developed using Python.</p>
            </div>
            <div className='icons'>
              <div className='icons-container'>
                <img className='icon gray-container' id='python-icon' src={python_icon} alt='technology-icon'></img>
              </div>
            </div>
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
