// client/src/pages/Home.js
import React from "react";
import "../../styles/Adopcion.css";
import { Link } from "react-router-dom";
import Card from "../card.js";
import Navbar from "../navbar.js"
import Footer from "../footer.js"

const Adopcion = () => {
  return (
    <>
    <Navbar/>
    <div className="home-adopcion">
      <h1>Adopta una mascota, ¡no te arrepentirás del amor que te dan!</h1>
      <Link to="/registroAnimal">
        <button type="submit" className="boton-registrar-animal"> 
          Registrar animal para dar en adopción
        </button>
      </Link>
      <div className="contenedor-tarjetas-mascotasAdopcion">
        <Card
          nombre={Card.nombre}
          especie={Card.especie}
          edad={Card.edad}
          raza={Card.raza}
          vacunado={Card.vacunado}
          esterilizado={Card.esterilizado}
          descripcion={Card.descripcion}
        />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Adopcion;
