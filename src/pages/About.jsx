import React from 'react';
import Nav from '../components/Nav';
import headshot from '../assets/savanna-headshot.jpg';

const About = () => {
  return (
    <div className="about page">
      <div className='page-content'>
        <div>
          <h2 className='white-fade-background'>About Me</h2>
        </div>
        <Nav />
        <div id="headshot-circle">
          <img id='headshot' src={headshot} alt="Photo of Ben Birdsall" />
        </div>
        <div className='p-container gray-text-container'>
          <p>
            Hi, I'm Savanna Birdsall. I recently graduated from Brigham Young University with a BA in Communications, and an emphasis in Public Relations. At BYU, I've learned skills in Research and Evaluation, Strategic Planning and Communication Tactics.
          </p>
          <p>
            I've also had the opportunity to work hands-on with clients, to gain intel on the public view of their company.
          </p>
          <p>
            Passionate about singing, dancing, and spending time with my family, I appreciate chances to genuinely connect with other people.
          </p>
        </div>

        <h3 id='ethical-statement-title'>Personal Ethical Statement</h3>
        <div className='p-container gray-text-container'>
          <p>This is where the statement will be.</p>
        </div>

        <h3 id='resume-title'>Resume</h3>
        <div className='p-container gray-text-container'>
          <h4>
            Education
          </h4>
          <p>
            This is the education
          </p>
          <h4>
            Work Experience
          </h4>
          <p>
            This is the work experience
          </p>
          <h4>
            Skills
          </h4>
          <p>
            This is the skill section
          </p>
          <h4>
            Certifications
          </h4>
          <p>
            This is the certifications section
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
