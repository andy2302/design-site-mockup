import React from 'react';
import presentation from '../assets/presentation.JPG';
import card1 from '../assets/card1.JPG';
import logo from '../assets/logo-01.png';
import graphic1 from '../assets/graphic1.png';
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
          <p>Welcome to Creative Compass Studio, where design meets innovation! Our studio is dedicated to providing exceptional design services that help our clients achieve their creative vision. Our team of skilled designers, artists, and strategists are passionate about creating stunning designs that are both aesthetically pleasing and functional.</p>
          <p>At Creative Compass Studio, we believe that every design project is unique and requires a tailored approach. We work closely with our clients to understand their needs, goals, and preferences, and we use our expertise to deliver exceptional results that exceed their expectations.</p>
          <p>Our studio offers a wide range of design services, including branding, graphic design, web design, and packaging design, among others. We use the latest tools and techniques to create designs that are not only visually appealing but also impactful and memorable.</p>
          <p>Thank you for choosing Creative Compass Studio. We are excited to embark on a creative journey with you and help bring your vision to life. Let's get started!</p>
        </div>
        <Card
          title="Maybe you need a logo?"
          description="Are you looking to create a logo for your business or brand? Designing a logo can seem like a daunting task, but it doesn't have to be. With the right approach and tools, you can create a stunning logo that effectively represents your brand and captures the attention of your audience."
          image={card1}
        />
      </div>
        <div className="graphic-container">
            <img src={graphic1} alt="Graphic 1" className="graphic1-image" />
            <div className="graphic-text">
                <h3>Our Design Philosophy</h3>
                <p>At Creative Compass Studio, we believe that great design is the perfect blend of form and function. Our design philosophy is rooted in simplicity, elegance, and innovation. We strive to create visually stunning designs that effectively communicate your brand message and engage your target audience.</p>
                <p>Our design philosophy is based on three key principles: simplicity, elegance, and innovation. We believe that simplicity is the ultimate form of sophistication and that design should be uncomplicated and easy to understand. We also believe in the power of elegance, where every design element is carefully chosen and placed to create a harmonious and visually pleasing composition.</p>
                <p>In addition, we believe that innovation is essential in creating designs that are unique, memorable, and impactful. Our team of skilled designers is always pushing the boundaries of creativity and exploring new techniques and technologies to create designs that are fresh, modern, and relevant.</p>
                <p>We understand that every design project is unique and requires a customized approach. We work closely with our clients to understand their goals, target audience, and brand personality. We then use our expertise to create designs that effectively communicate their message and capture the attention of their audience.</p>
                <p>At Creative Compass Studio, we are passionate about creating designs that not only look good but also work well. Our focus on form and function ensures that every design we create is not only visually stunning but also functional and purposeful.</p>
                <br></br>
                <p>In summary, our design philosophy is based on simplicity, elegance, and innovation. We believe that great design is the perfect blend of form and function and we are committed to creating designs that effectively communicate our clients' message and engage their target audience.</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
