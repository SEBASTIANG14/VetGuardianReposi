import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home">VetGuardian</Link>
      </div>
      <ul className="navbar-nav">
        <li><Link to="/mascotas">Adoptar</Link></li>
        <li><Link to="/reporteDenuncia">Denunciar</Link></li>
        <li><Link to="/reportePerdida">Reportar extravio</Link></li>
        <li><Link to="/vacunacion">Vacunacion</Link></li>
        <li><Link to="/seguimiento">Seguimiento</Link></li>
      </ul>
      <div className="navbar-profile">
        <li><Link to="/perfil" className="profile-link">Tu Perfil</Link></li>
      </div>
    </nav>
  );
};

export default Navbar;


