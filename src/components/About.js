// About.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import ProjectCard from './ProjectCard';

const About = () => {
  return (
    <><section id="about" className="about-section fade-in">
      <h1 className="logo">Chandana Padarthi</h1>
      <p><i>Seeking a challenging opportunity in a reputable company to continuously learn and apply my capabilities.</i></p>
      <h2>About Me</h2>
      <div id="line"></div>
      <div className="card">
        <h3>OBJECTIVE</h3>
        <p> I am actively pursuing a challenging opportunity within a reputable
 organization where I can leverage my skills and continuously enhance my
 expertise. My goal is to contribute effectively while expanding my
 professional capabilities in a dynamic environment.</p>
      </div>
      <div className="contact-info" class="me">
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Tangutur, 523274, India</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> chandanapadarthi13@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} /> 9866050226</p>
        <p><b>LinkedIn:</b><a href='https://www.linkedin.com/in/chandana-padarthi-6ab02a277'>https://www.linkedin.com/in/chandana-padarthi-6ab02a277</a>
        </p>
        <p><b>GitHub: </b><a href='https://github.com/Chandanapadarthi/ACMW-Mini-Project'>https://github.com/Chandanapadarthi</a></p>
      </div>
    </section>
    <section id="Certifications" className="about-section fade-in">
    <h2>Certifications</h2>
    <div id="line"></div>
        <div className="projects-grid"></div>
          <ProjectCard
            title="Associate Cloud Engineer"
            description="By Google"
            link="https://www.credly.com/badges/a353ad3b-fb0e-49db-9be5-ba6e663bdb3d/linked_in_profile" />
          <ProjectCard
            title=" SALESFORCE DEVELOPER"
            description="By SmartBridge"
            link="https://smartinternz.com/internships/salesforce_certificates/d2ec30f43808288f6ab48873c2ffe883" />
          <ProjectCard
            title="DIGITAL SKILLS: USER EXPERIENCE"
            description="By Accenture"
            link="https://www.futurelearn.com/certificates/aeavbf6" />
            <ProjectCard
            title="Introduction to MongoDB for Students"
            description="By MongoDB"
            link="https://learn.mongodb.com/c/Cvk0sRcvQDK-_lCU1gmMpw" />
            <ProjectCard
            title="My APSSDC, My Website Web Design Course"
            description="By GUVI Support"
            link="https://www.guvi.in/verify-certificate?id=1l3647g61VW7R43Io1" />
       
      </section>
      </>
  );
};

export default About;