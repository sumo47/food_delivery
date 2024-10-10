import React from 'react';
import './About.css'; // Add animation styles

const About = () => {
  return (
    <div className="about-page">
      <div className="about-section">
        <h1 className="fade-in">About Us</h1>
        <p className="fade-in delay-1">
          We are a passionate team committed to delivering the best food from the finest restaurants directly to your door.
        </p>
        <p className="fade-in delay-2">
          Our mission is to provide quick and easy access to your favorite meals with just a few clicks. Whether you're craving a quick snack or a full meal, we’ve got you covered!
        </p>
        <p className="fade-in delay-3">
          Explore our diverse menu, enjoy hassle-free delivery, and experience the ultimate convenience in food ordering!
        </p>
      </div>
    </div>
  );
};

export default About;
