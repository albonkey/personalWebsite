import React from 'react';
import './Resume.css';

const Resume = () => {
  return(
    <div className='resume'>
      <div className='resume-header'>
        <div>
          <h1>Carl Solli </h1>
          <div>Software Developer</div>
        </div>
        <div>
          <ul className='contact-info'>
            <li>carl_solli@hotmail.com</li>
            <li>+47 98 072 163</li>
            <li>www.carlsolli.com</li>
          </ul>
        </div>
      </div>
      <div className='resume-summary'>
        <h4 className='section-heading'></h4>
        <p className='section-paragraph'>
          I will be graduating from California State University of Los Angeles Spring 2022.
          I have previous work experience in other fields than tech. I’m a student-athlete and compete in soccer for the university.
        </p>
      </div>
      <div className='resume-education'>
        <h4 className='section-heading'>Education</h4>
        <div className='section-info'>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>CALIFORNIA STATE UNIVERSITY OF LOS ANGELES</h5>
            <p className='section-paragraph'>
              Los Angeles, CA <br />
              College of Engineering, Computer Science, and Technology <br />
              Student Athlete Men's Soccer<br />
              Expected graduation: 06/22 <br />
              Current GPA: 3.45 / 4.00
            </p>
          </div>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>BS IN COMPUTER SCIENCE</h5>
            <p className='section-paragraph'>
              <ul>
                <li>Programming I, II</li>
                <li>Programming with Data Structures</li>
                <li>Introduction to Relational Databases</li>
                <li>Web and Internet Programming </li>
                <li>Software Engineering</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className='resume-work'>
        <h4 className='section-heading'>Work Experience</h4>
        <div className='section-info'>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>STANSEFABRIKKEN AS</h5>
            <p className='section-paragraph'>
              Worked on producing different kinds of
              electronical devices that were used in tunnels
              and homes to regulate electricity. Came up with
              methods to streamline the production workflow.
            </p>
          </div>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>PRODUCTION ASSISTANT</h5>
            <p className='section-paragraph'>
              <ul>
                <li>April 2018 - August 2018</li>
                <li>Sandefjord, Norway</li>
              </ul>
            </p>
          </div>
        </div>
        <div className='section-info'>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>POSTEN AS</h5>
            <p className='section-paragraph'>
              Would deliver packages and interact with
              companies and personal clients.
            </p>
          </div>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>MAIL/ PACKAGE DELIVERY</h5>
            <p className='section-paragraph'>
              <ul>
                <li>April 2017 - January 2018 </li>
                <li>Larvik, Norway</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className='resume-skills'>
        <h4 className='section-heading'>Skills</h4>
        <div className='section-info'>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>TECHNICAL</h5>
            <p className='section-paragraph'>
              <ul>
                <li>JavaScript / React </li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB / MySQL</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </p>
          </div>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>PROFESSIONAL</h5>
            <p className='section-paragraph'>
              <ul>
                <li>Good Communication</li>
                <li>Great Teamwork</li>
                <li>Problem Solver</li>
                <li>Quick Learner</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className='resume-interests'>
        <h4 className='section-heading'>Interests</h4>
        <div className='section-info'>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>Soccer</h5>
            <p className='section-paragraph'>
              I’ve been playing soccer since I was 4
              years old. It has let me travel to different
              countries and attend college here in the US.
            </p>
          </div>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>Reading</h5>
            <p className='section-paragraph'>
               I mostly read books about self
                -improvement, psychology and technology.
            </p>
          </div>
          <div className='section-info-article'>
            <h5 className='section-inner-heading'>Filmmaking/ Photography</h5>
            <p className='section-paragraph'>
              I like taking pictures
              and editing videoes. I have my own
              youtube channel and upload from time to time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;
