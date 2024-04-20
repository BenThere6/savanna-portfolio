import React from 'react';
import Nav from '../components/Nav';
import './style.css';

const Home = () => {
  return (
    <div className='home center'>
      <div className='home-content'>
        <Nav />
        <h2 id='my-name'>Savanna Birdsall</h2>
        <h3 >Child Relations Professional</h3>
      </div>
    </div>
  );
};

export default Home;
