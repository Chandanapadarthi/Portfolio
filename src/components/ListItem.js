// ListItem.js
import React from 'react';
import './ListItem.css';

const ListItem = ({ title, subtitle, details = [] }) => (
  <div className="list-item">
    <h3>{title}</h3>
    <p>{subtitle}</p>
    <ul>
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

export default ListItem;
