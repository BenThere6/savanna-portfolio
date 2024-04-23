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
            I'm passionate about singing, dancing, and spending time with my family, I appreciate chances to genuinely connect with other people.
          </p>
        </div>

        <h3 id='ethical-statement-title'>Personal Ethical Statement</h3>
        <div className='p-container gray-text-container'>
          <p>Growing up, I learned about ethics through my religion, personal experiences, and education. Central to my ethical compass is the principle of treating others with respect, fairness, and kindness, following the golden rule of doing unto others as you would have them do unto you. I believe in maintaining integrity and virtues like honesty, advocacy, and fairness in all aspects of life. Loyalty to oneself, humanity, and clients guides my actions, while ethical decision-making involves consulting my conscience, seeking expertise, and engaging in dialogue with others. Ultimately, I aim to live a life of integrity, continually striving to make ethical decisions rooted in principle and moral conviction.</p>
          <div className='center'>
            <a className='link statement-link' href="https://docs.google.com/document/d/1swjJIXRU0hUnaZTAl_V97gMNSG8yBK23L3wKIrGjyME/edit?usp=sharing" target="_blank">View Full Statement</a>
          </div>
        </div>

        <h3 id='resume-title'>Resume</h3>
        <div className='p-container gray-text-container'>
          <h4>
            Education
          </h4>
          <div>
            <div>
              Bachelor of Arts in Public Relations
            </div>
            <div>
              Brigham Young University
            </div>
            <div>Expected Graduation - 2025</div>
          </div>
          <h4>
            Work Experience
          </h4>
          <div>
            <div className='resume-job-title'>
              Life Coach for Teens, Elevations RTC
            </div>
            <div>
              Syracuse, UT | June 2023 - Sept 2023
            </div>
            <ul>
              <li>Conducted one-on-one mentoring sessions to guide and support teenagers' healing</li>
              <li>Cultivated effective communication skills, fostering open dialogue to guide the teens towards healthy decisions</li>
              <li>Encouraged rule adherence to promote mutual respect and growth, maintaining safety for all students</li>
            </ul>
          </div>
          <div>
            <div className='resume-job-title'>
              Resident Assistant, Brigham Young University
            </div>
            <div>
              Provo, UT | Aug 2022 - May 2023
            </div>
            <ul>
              <li>Recognized as RA of the Year for 2023</li>
              <li>Mentored 43 students, promoting personal growth, academic success, and community engagement</li>
              <li>Designed and implemented educational programs focusing on time management, nutrition, communication, emotional health, and educational success</li>
            </ul>
          </div>
          <div>
            <div className='resume-job-title'>
              Quality Control Specialist, UST Pharmaceutical Manufacturing
            </div>
            <div>
              Layton, UT | January 2022 - Aug 2022
            </div>
            <ul>
              <li>Assigned and conducted laboratory tests on samples to ensure product safety and quality standards</li>
              <li>Played a pivotal role in enhancing company profitability by diligently generating Certificates of Analysis, certifying that all laboratory tests were performed within safe and regulatory specifications</li>
            </ul>
          </div>
          <div>
            <div className='resume-job-title'>
              Warehouse Associate, Amazon Fulfillment Center
            </div>
            <div>
              Salt Lake City, UT | April 2020 - May 2020
            </div>
            <ul>
              <li>Maintained a high level of accuracy while verifying, scanning, and tracking incoming and outgoing merchandise</li>
              <li>Organized merchandise efficiently to optimize the shipping process</li>
            </ul>
          </div>
          <h4>
            Skills
          </h4>
          <div>
            <ul>
              <li>Excellent interpersonal and communication skills</li>
              <li>Strong organizational and time management abilities</li>
              <li>Problem-solving and conflict resolution skills</li>
              <li>Attention to detail and accuracy</li>
            </ul>
          </div>
          <h4>
            Certifications
          </h4>
          <div>
            <ul>
              <li>here</li>
              <li>and here</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
