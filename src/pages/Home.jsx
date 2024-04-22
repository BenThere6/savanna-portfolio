import React from 'react';
import Nav from '../components/Nav';
import './style.css';

const Home = () => {
  return (
    <div className='home center'>
      <div className='home-content'>
        <Nav />
        <div className='white-fade-background'>
          <h2 id='my-name'>Savanna Birdsall</h2>
          <h3 >Public Relations Professional</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
