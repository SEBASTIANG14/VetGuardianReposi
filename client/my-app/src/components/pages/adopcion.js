// client/src/pages/Home.js
import React from "react";
import "../../styles/Adopcion.css";
import Card from "../card.js";
import Navbar from "../navbar.js"
import Footer from "../footer.js"

const Adopcion = () => {
  return (
    <div className="home">
      <Navbar/>
      <h1>Adopta una mascota, ¡no te arrepentirás del amor que te dan!</h1>
      <button className="boton-registrar">
        Registrar animal para dar en adopción
      </button>
      <div className="contenedor-tarjetas">
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
      <Footer/>
    </div>
  );
};

export default Adopcion;
