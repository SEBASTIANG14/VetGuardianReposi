import React, { useEffect, useState } from "react";
import "../styles/Card.css"; // Crea este archivo CSS para dar estilo a la tarjeta
import { verAdopciones } from "../api/adopcion.api.js";

const Card = ({}) => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    async function loadMascotas() {
      const response = await verAdopciones();
      setMascotas(response.data);
    }
    loadMascotas();
  }, []);

  return (
    mascotas.map((mascota, index) => (
      <div className="Card" key={index}>
        <h3>{mascota.nombre}</h3>
        <p>{mascota.especie}</p>
        <p>{mascota.edad}</p>
        <p>{mascota.raza}</p>
        <p>{mascota.vacunado}</p>
        <p>{mascota.esterilizado}</p>
        <p>{mascota.descripcion}</p>
        <button className="boton-adoptar">Adoptar</button>
      </div>
    ))
  );
};

export default Card;

