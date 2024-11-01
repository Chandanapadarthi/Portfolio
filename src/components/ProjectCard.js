// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, link }) => (
  <div className="cert-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} rel="noopener noreferrer">View Certificate</a>
  </div>
);

export default ProjectCard;
