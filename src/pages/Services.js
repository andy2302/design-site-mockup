import React, { useState } from 'react';
import OrderForm from '../components/OrderForm';
import './Services.css';

function Services() {
  const [showForm, setShowForm] = useState(false);
  const [formPosition, setFormPosition] = useState({ top: 0, left: 0 });
  const [selectedService, setSelectedService] = useState(null);

  const handleBuyClick = (serviceName, e) => {
    setShowForm(!showForm);
    setSelectedService(serviceName);
    const rect = e.target.getBoundingClientRect();
    let formLeft = rect.left;

    // Calculate the available space on the right side of the screen
    const availableSpace = window.innerWidth - rect.right;

    // If there's not enough space on the right side, align the form with the right edge of the button
    if (availableSpace < 400) {
      formLeft = rect.right - 400;
    }

    setFormPosition({ top: rect.bottom + 10, left: formLeft });
  };

  return (
    <div className="service-page-content">
      <h2>Our Services</h2>
      {showForm && (
        <div
          className="order-form-container"
          style={{ top: formPosition.top, left: formPosition.left }}
        >
          <OrderForm serviceName={selectedService} />
        </div>
      )}
      <div className="service">
        <h3>Logo Design</h3>
        <p>We create unique and professional logos that represent your brand's identity.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("Logo Design", e)}>Buy</button>
      </div>
      <div className="service">
        <h3>Web Design</h3>
        <p>We design and develop beautiful and user-friendly websites that convert visitors into customers.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("Web Design", e)}>Buy</button>
      </div>
      <div className="service">
        <h3>Print Design</h3>
        <p>We offer a range of print design services, including brochures, business cards, and packaging design.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("Print Design", e)}>Buy</button>
      </div>
      <div className="service">
        <h3>Branding and Identity Design</h3>
        <p>We create a unique brand identity for your business, including logo design, color palette, typography, and visual style.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("Branding and Identity Design", e)}>Buy</button>
      </div>
      <div className="service">
        <h3>UX/UI Design</h3>
        <p>We design and develop user interfaces for websites, mobile apps, and software applications, as well as execute user experience strategies to help you achieve your business goals.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("UX/UI Design", e)}>Buy</button>
      </div>
      <div className="service">
        <h3>Brochure Design</h3>
        <p>We create high-quality and visually appealing brochures for print and digital use that help you promote your business.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("Brochure Design", e)}>Buy</button>
      </div>
      <div className="service">
        <h3>Packaging Design</h3>
        <p>We design product packaging, including boxes, bags, and labels, that showcase your brand's personality and values and help your product stand out on the shelves.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("Packaging Design", e)}>Buy</button>
      </div>
      <div className="service">
        <h3>Social Media Design</h3>
        <p>We create eye-catching social media graphics, including profile pictures, cover photos, and post graphics, that help you increase your online presence and engagement.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("Social Media Design", e)}>Buy</button>
      </div>
      <div className="service">
        <h3>Copywriting and Content Creation</h3>
        <p>We create high-quality written content for websites, blogs, social media, and other marketing collateral that help you communicate your message and connect with your audience.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("Copywriting and Content Creation", e)}>Buy</button>
      </div>
      <div className="service">
        <h3>Photography and Videography</h3>
        <p>We provide professional photography and videography services for product shots, corporate events, and social media content that help you tell your story and showcase your brand's personality.</p>
        <button className="buy-button" onClick={(e) => handleBuyClick("Photography and Videography", e)}>Buy</button>
      </div>
    </div>
  );
}

export default Services;
