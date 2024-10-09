import React from 'react';
import './HeroSection.css'; // Add styles here

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Shop With Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="hero-buttons">
          <button>Shop Now</button>
          <button>Club Membership</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
