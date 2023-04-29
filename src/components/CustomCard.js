import React from 'react';
import './CustomCard.css';

function CustomCard({ title, description, image }) {
  return (
    <div className="custom-card">
      <div className="custom-card-image-wrapper">
        <img src={image} alt={title} className="custom-card-image" />
      </div>
      <div className="custom-card-content">
        <h3 className="custom-card-title">{title}</h3>
        <p className="custom-card-description">{description}</p>
      </div>
    </div>
  );
}

export default CustomCard;
