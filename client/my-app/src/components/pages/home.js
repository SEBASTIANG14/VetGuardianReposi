// src/components/pages/Home.js
import React from 'react';
import '../../styles/Home.css'; 
import Navbar from '../navbar.js';
import Footer from '../footer.js'

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
      <div className="banner">
        <img src={`${process.env.PUBLIC_URL}/assets/poncho.jpg`} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Bienvenido a VetGuardian</h1>
          <p>El centro de adopción más grande del país</p>
        </div>
      </div>
      <div className="objectives">
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
      <Footer/>
    </div>
  );
};

export default Home;
