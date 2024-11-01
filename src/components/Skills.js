// Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skill">
        <span>Java</span>
        <div className="skill-bar"><div className="skill-level java"></div></div>
      </div>
      <div className="skill">
        <span>SQL</span>
        <div className="skill-bar"><div className="skill-level sql"></div></div>
      </div>
      <div className="skill">
        <span>C PROGRAMMING</span>
        <div className="skill-bar"><div className="skill-level c"></div></div>
      </div>
      <div className="skill">
        <span>PYTHON</span>
        <div className="skill-bar"><div className="skill-level py"></div></div>
      </div>
      <div className="skill">
        <span>REACTJS</span>
        <div className="skill-bar"><div className="skill-level rjs"></div></div>
      </div>
    </section>
  );
};

export default Skills;
