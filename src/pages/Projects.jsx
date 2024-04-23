import React, { useState } from 'react';
import Nav from '../components/Nav';
import muckrack_image from '../assets/muckrack-image-2.png';
import meltwater_image from '../assets/Meltwater-image.png';
import semrush_image from '../assets/SEMrush-image.png';
import oped_image from '../assets/oped-image.png';
import feature_story_image from '../assets/feature-story-image.png';
import news_release_image from '../assets/news-release-image.png';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('research');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="page">
      <div className="page-content">
        <div>
          <h2 className='white-fade-background'>My Projects</h2>
        </div>
        <Nav />
        <div className='projects-container'>
          <div className='category-buttons'>
            <button onClick={() => handleCategoryChange('research')}>Research and Evaluation</button>
            <button onClick={() => handleCategoryChange('writing')}>Writing Tactics</button>
          </div>
          {selectedCategory === 'research' && (
            <div>
              <div className="project" id='proj-one'>
                <h3 className='project-name'>Muck Rack Project</h3>
                <div className='center project-image-wrapper'>
                  <img className='project-image' src={muckrack_image} alt='project-image'></img>
                </div>
                <div className='gray-text-container proj-paragraph'>
                  <p>In this project, I analyzed MuckRack data on mindfulness and meditation to determine 5 reporters I would reach out to if I worked for a company centered on meditation. I then created an event the company would sponsor, in order to meet the reporters, and give them an opportunity to learn about our company for future opportunities.</p>
                </div>
                <div className='center'>
                  <div className='gray-container project-links'>
                    <a className='link' href="https://docs.google.com/presentation/d/1_OfPVtXQkIWpz5Z645flbXtlel1qA4Em/edit?usp=sharing&ouid=103382045392221082977&rtpof=true&sd=true" target="_blank">View Project</a>
                  </div>
                </div>
              </div>
              {/* Add more research projects here */}
              <div className="project">
                <h3 className='project-name'>Melt Water Project</h3>
                <div className='center project-image-wrapper'>
                  <img className='project-image' src={meltwater_image} alt='project-image'></img>
                </div>
                <div className='gray-text-container proj-paragraph'>
                  <p>In this project, I acted in the Role of Our Family Wizard, a company that facilitates co-parenting communication among separated parents. Through my research, I learned what time of year OFW receives the most coverage. I learned that its overall sentiment is neutral, and I learned which major outlets cover it most. As a PR representative, I can use this information to help the company strategically plan ways to communicate with their publics in order to reach KPI's.</p>
                </div>
                <div className='center'>
                  <div className='gray-container project-links'>
                    <a className='link' href="https://docs.google.com/presentation/d/1uypgfdEVJqPz6j_hlMnSaW18Tubva82V/edit?usp=sharing&ouid=103382045392221082977&rtpof=true&sd=true" target="_blank">View Project</a>
                  </div>
                </div>
              </div>
              <div className="project">
                <h3 className='project-name'>SEMrush Project</h3>
                <div className='center project-image-wrapper'>
                  <img className='project-image' src={semrush_image} alt='project-image'></img>
                </div>
                <div className='gray-text-container proj-paragraph'>
                  <p>Through this project, I used SEMrush to analyze Our Family Wizard's backlinks and keywords. I compared those with the most effective keywords related to Our Family Wizard's work, and offered suggestions to help Our Family Wizard's Search Engine Optimization. This would increase the public awareness of the company, and help the publics understand the resource OFW offers.</p>
                </div>
                <div className='center'>
                  <div className='gray-container project-links'>
                    <a className='link' href="https://docs.google.com/presentation/d/1KBGOkQSZ_0jaO96GKVCwiSI7239XXATJ/edit?usp=sharing&ouid=103382045392221082977&rtpof=true&sd=true" target="_blank">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedCategory === 'writing' && (
            <div>
              <div className="project">
                <h3 className='project-name'>Op Ed: The Perfect Lie </h3>
                <div className='center project-image-wrapper'>
                  <img className='project-image' src={oped_image} alt='project-image'></img>
                </div>
                <div className='gray-text-container proj-paragraph'>
                  <p>This is a challenge to perfectionism, and the mindsets that poison us over time. In this Op Ed, I help people recognize perfectionistic tendencies. I also offer simple steps to help those who struggle with perfectionism begin to heal. Many people think it's all-or-nothing. But what could a little step here, a little step there accomplish over the long run?</p>
                </div>
                <div className='center'>
                  <div className='gray-container project-links'>
                    <a className='link' href="https://docs.google.com/document/d/1Ldoa2crIO7Lwbbru28ewRQfYSs1IS9q_N6vVJt5MstA/edit?usp=sharing" target="_blank">View Project</a>
                  </div>
                </div>
              </div>
              <div className="project">
                <h3 className='project-name'>Feature Story: Sued and Sales Doubled: A PR victory</h3>
                <div className='center project-image-wrapper'>
                  <img className='project-image' src={feature_story_image} alt='project-image'></img>
                </div>
                <div>Picture credit: Fox 13</div>
                <div className='gray-text-container proj-paragraph'>
                  <p>In this piece, I explore the story of how a brand new business was sued by a major cookie corporation, and used it to double sales.</p>
                </div>
                <div className='center'>
                  <div className='gray-container project-links'>
                    <a className='link' href="https://docs.google.com/document/d/1IcwMUNXiyZPqrUkmvexK8oe1ABdxrywixAy9dqmRaWg/edit?usp=sharing" target="_blank">View Project</a>
                  </div>
                </div>
              </div>
              <div className="project">
                <h3 className='project-name'>News Release: Freeman Habrowski speaks at BYU</h3>
                <div className='center project-image-wrapper'>
                  <img className='project-image' src={news_release_image} alt='project-image'></img>
                </div>
                <div>Picture credit: Deseret News</div>
                <div className='gray-text-container proj-paragraph'>
                  <p>In this project, I wrote from the perspective of BYU's Public Relations Team, offering a news release to help students anticipate Freeman Habrowski coming to speak to BYU students in February 2024.</p>
                </div>
                <div className='center'>
                  <div className='gray-container project-links'>
                    <a className='link' href="https://docs.google.com/document/d/1_fxOxmXp6sKk2xHEzrq-ZLZwauqsnFeR0wS-zi7OiXc/edit?usp=sharing" target="_blank">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;