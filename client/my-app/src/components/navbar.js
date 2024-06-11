import React from 'react';
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../functions/logout';

const Navbar = () => {
 const navigate = useNavigate()
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
   <ul className="navbar-nav">
    <li><Link to="#" onClick={() => {
     logOut()
     window.location.replace("/login")
    }} className="profile-link">Cerrar sesión</Link></li>
   </ul>
  </nav>
 );
};

export default Navbar;


