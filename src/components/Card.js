import React from 'react';
import './Card.css';

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <h3 className="card-text">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
