import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles here

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Selling.</h2>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsMobile(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setIsMobile(false)}>Products</Link></li>
        <li><Link to="/about" onClick={() => setIsMobile(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
