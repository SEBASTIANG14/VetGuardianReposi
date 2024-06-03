// client/src/components/Tarjeta.js
import React, { useEffect, useState } from "react";
import "../styles/Card.css"; // Crea este archivo CSS para dar estilo a la tarjeta
import verAdopciones from "../api/adopcion.api.js";

const Card = ({}) => {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    async function loadMascotas() {
      const response = await verAdopciones();
      setMascotas(response.data);
    }
    loadMascotas();
  }, []);
  return(
    mascotas.map((mascotas, index) => (
    <div className="Card" key={index}>
      <h3>{mascotas.nombre}</h3>
      <p>{mascotas.especie}</p>
      <p>{mascotas.edad}</p>
      <p>{mascotas.raza}</p>
      <p>{mascotas.vacunado}</p>
      <p>{mascotas.esterilizado}</p>
      <p>{mascotas.descripcion}</p>
      <button className="boton-adoptar">Adoptar</button>
    </div>
  ))
)
}

export default Card;
