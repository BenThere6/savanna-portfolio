import React from 'react';
import Nav from '../components/Nav';
import './style.css';

const Home = () => {
  return (
    <div className='home center'>
      <div className='home-content'>
        <Nav />
        <h2 id='my-name'>Ben Birdsall</h2>
        <h3 >Full Stack Web Developer</h3>
      </div>
    </div>
  );
};

export default Home;
