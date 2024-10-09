import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles here
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";




const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Jagannath Food Delivery</h2>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsMobile(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setIsMobile(false)}>Products</Link></li>
        <li><Link to="/about" onClick={() => setIsMobile(false)}>About Us</Link></li>
        <li><Link to="/contact" onClick={() => setIsMobile(false)}>Contact</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes/> : <FaBars/>}
      </button>
    </nav>
  );
};

export default Navbar;
