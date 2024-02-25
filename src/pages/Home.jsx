import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <div className='home center'>
      <div className='home-content'>
        <h2>Ben Birdsall</h2>
        <h3>Full Stack Web Developer</h3>
        <div className='gray-container home-nav'>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
