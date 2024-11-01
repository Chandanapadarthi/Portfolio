// Portfolio.js
import React from 'react';
import Header from './Header';
import Section from './Section';
import ListItem from './ListItem';
import ProjectCard from './ProjectCard';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Header />

      <Section title="About Me">
        <p>
          I am an enthusiastic developer with experience in various technologies and a passion for creating efficient and scalable web applications.
        </p>
      </Section>

      <Section title="Skills">
        <ul className="skills-list">
          <ListItem title="JavaScript" />
          <ListItem title="React" />
          <ListItem title="Node.js" />
          <ListItem title="HTML & CSS" />
        </ul>
      </Section>

      <Section title="Projects">
        <div className="projects-grid">
          <ProjectCard
            title="Project One"
            description="A brief description of Project One"
            link="https://github.com/username/project-one"
          />
          <ProjectCard
            title="Project Two"
            description="A brief description of Project Two"
            link="https://github.com/username/project-two"
          />
        </div>
      </Section>

      <Section title="Contact">
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile">linkedin.com/in/your-profile</a></p>
      </Section>
    </div>
  );
};

export default Portfolio;
