import React from 'react';
import CustomCard from '../components/CustomCard';
import adinaImage from '../assets/adina.jpg';
import raulImage from '../assets/raul.jpg';
import victorImage from '../assets/victor.jpg';
import alexImage from '../assets/alex.jpg';
import './About.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function About() {
  return (
    <div className="about-page-content">
      <div className="about-content">
        <div className="about-text">
            <h2>About Our Company</h2>
            <p>The four founders of Creative Compass Studio - Adina, Raul, Victor, and Alex - were initially studying electrical engineering, but they soon discovered that their true passion was design. While they enjoyed the technical aspects of engineering, they found themselves drawn to the creative side of the field.</p>
            <p>Adina was fascinated by the power of branding and how it could help businesses stand out in a crowded marketplace. Raul had a keen eye for design and was drawn to the world of web design and development. Victor had a love for typography and print design, while Alex was interested in user experience and interface design.</p>
            <p>Despite their passion for design, the four friends initially pursued careers in electrical engineering after graduation. However, they soon realized that they were not fulfilled by their work and longed for something more creative.</p>
            <p>Determined to follow their dreams, the four friends decided to pursue their passion for design and enrolled in a graphic design program. They spent countless hours honing their skills, studying the principles of design, and learning about the latest design tools and techniques.</p>
            <p>After completing their studies, they gained valuable experience working for various design agencies and companies. However, they soon realized that they wanted to create a design studio that was different from the rest - one that was rooted in creativity, innovation, and excellence.</p>
            <p>In 2023, Adina, Raul, Victor, and Alex decided to combine their expertise and passion for design and founded Creative Compass Studio. They were determined to create a design studio that put the client's needs first, and one that was dedicated to creating designs that were both visually stunning and functional.</p>
            <p>Today, Creative Compass Studio is a successful design studio that has won numerous awards for its exceptional designs. Adina, Raul, Victor, and Alex are proud of what they have accomplished and are excited about what the future holds for their studio. Their journey from electrical engineering to design is a testament to the power of following one's passion and pursuing one's dreams.</p>
        </div>
        <div className="about-cards">
        <Carousel 
            showThumbs={false} 
            infiniteLoop={true} 
            showStatus={false}
            autoPlay={true} // Enable autoplay
            interval={3000} // Adjust interval (in milliseconds) for autoplay; default is 3000
            stopOnHover={true} // Add this prop to stop autoplay when user hovers over carousel
          >
            <div>
              <CustomCard
                title="Crăciun Stavrula-Adina"
                description="Head Marketer"
                image={adinaImage}
              />
            </div>
            <div>
              <CustomCard
                title="Pop Raul-Adrian"
                description="Chief Designer"
                image={raulImage}
              />
            </div>
            <div>
              <CustomCard
                title="Rebegea Victor"
                description="Typographer and Designer"
                image={victorImage}
              />
            </div>
            <div>
              <CustomCard
                title="Goman Alexandru-Bogdan"
                description="UI/UX developer"
                image={alexImage}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default About;