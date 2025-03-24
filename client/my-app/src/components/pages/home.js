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
 }, [user, navigate]);

 return (
<div className="home-page">
        <Navbar/>
      <div className="banner-home">
        <img src={`${process.env.PUBLIC_URL}/assets/perroGato.jpg`} alt="Banner" className="banner-image-home" />
        <div className="banner-text-home">
          <h1>Bienvenido a VetGuardian</h1>
          <p>El centro de adopción más grande del país</p>
        </div>
      </div>
      <div className='conocenos'>
        <h1>Conoce un poco mas sobre nosotros</h1>
      </div>
      <div className="objectives-home">
        <div className="objective-card-home">
          <img src={`${process.env.PUBLIC_URL}/assets/img1.jpg`} alt="Objective" />
          <div className="objective-text-home">
            <h3>¿Quienes somos?</h3>
            <p>
              Somos un grupo de personas que amamos a todos los animales y queremos hacer para ellos
              un mundo mejor, rescatarlos y darles un gran hogar donde vivir.
            </p>
          </div>
        </div>
        <div className="objective-card-home">
          <img src={`${process.env.PUBLIC_URL}/assets/img2.jpg`} alt="Objective" />
          <div className="objective-text">
            <h3>¿Cuál es nuestro objetivo?</h3>
            <p>
              Lograr tener un refugio donde acoger a miles de animalitos que
              estén en situación de calle y encontrarles un hogar.
            </p>
          </div>
        </div>
        <div className="objective-card-home">
          <img src={`${process.env.PUBLIC_URL}/assets/img3.jpg`} alt="Objective" />
          <div className="objective-text">
            <h3>¿Que puedes hacer para apoyar?</h3>
            <p>
              Actualmente puedes adoptar a una mascota si lo deseas, a su vez que reportar cuando veas un animalitos
              sin hogar o que lo esten maltratando, tambien si se te extravio tu mascota lo puedes reportar y nosotros te ayudaremos
              a que vuelva contigo!
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
 );
};

export default Home;
