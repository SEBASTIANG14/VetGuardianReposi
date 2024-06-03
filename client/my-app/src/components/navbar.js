// src/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">VetGuardian</div>
      <ul className="navbar-nav">
        <li><a href="#adoptar">Adoptar</a></li>
        <li><a href="#reportar-maltrato">Reportar maltrato</a></li>
        <li><a href="#agendar-vacunacion">Agendar vacunación</a></li>
        <li><a href="#seguimiento">Seguimiento</a></li>
        <li><a href="#reportar-perdida">Reportar pérdida</a></li>
      </ul>
      <div className="navbar-profile">
        <a href="#profile">
          <img src="path-to-profile-icon.png" alt="Profile" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
