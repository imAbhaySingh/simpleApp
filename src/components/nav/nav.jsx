import React from 'react';
import './nav.css'; 
import logo from "../../images/logo.png"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <a href="#home">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
