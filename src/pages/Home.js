import React from 'react';
import presentation from '../assets/presentation.JPG';
import card1 from '../assets/card1.JPG';
import logo from '../assets/logo-01.png';
import Card from '../components/Card';
import './Home.css';

function Home() {
  return (
    <div className="page-content">
      <div className="banner-container">
        <img src={presentation} alt="Example" className="banner-image" />
        <img src={logo} alt="Logo" className="overlay-logo" />
      </div>
      <div className="content">
        <div className="text-section">
          <h2>Welcome to our Design Studio</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero...</p>
        </div>
        <Card
          title="Featured Project"
          description="Check out our latest project, a responsive web design for a major client..."
          image={card1}
        />
      </div>
    </div>
  );
}

export default Home;
