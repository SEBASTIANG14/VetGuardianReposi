// src/components/pages/Home.js
import React, { useEffect } from 'react';
import '../../styles/Home.css';
import Navbar from '../navbar.js';
import Footer from '../footer.js'
import { getUserSession } from "../../functions/userSession";
import { useNavigate } from 'react-router-dom';

const Home = () => {
 const navigate = useNavigate()
 const user = getUserSession()
 useEffect(() => {
  if (user === null) {
   navigate("/login")
  }
 }, []);

 return (
  <div className="home-page">
   <Navbar />
   <div className="banner-home">
    <img src={`${process.env.PUBLIC_URL}/assets/poncho.jpg`} alt="Banner" className="banner-image-home" />
    <div className="banner-text-home">
     <h1>Bienvenido a VetGuardian</h1>
     <p>El centro de adopción más grande del país</p>
    </div>
   </div>
   <div className="objectives-home">
    <div className="objective-card-home">
     <img src={`${process.env.PUBLIC_URL}/assets/poncho.jpg`} alt="Objective" />
     <div className="objective-text-home">
      <h3>¿Cuál es nuestro objetivo?</h3>
      <p>
       Lograr tener un refugio donde acoger a miles de animalitos que
       estén en situación de calle y encontrarles un hogar.
      </p>
     </div>
    </div>
    <div className="objective-card">
     <img src={`${process.env.PUBLIC_URL}/assets/poncho.jpg`} alt="Objective" />
     <div className="objective-text">
      <h3>¿Cuál es nuestro objetivo?</h3>
      <p>
       Lograr tener un refugio donde acoger a miles de animalitos que
       estén en situación de calle y encontrarles un hogar.
      </p>
     </div>
    </div>
    <div className="objective-card">
     <img src={`${process.env.PUBLIC_URL}/assets/poncho.jpg`} alt="Objective" />
     <div className="objective-text">
      <h3>¿Cuál es nuestro objetivo?</h3>
      <p>
       Lograr tener un refugio donde acoger a miles de animalitos que
       estén en situación de calle y encontrarles un hogar.
      </p>
     </div>
    </div>
   </div>
   <Footer />
  </div>
 );
};

export default Home;
