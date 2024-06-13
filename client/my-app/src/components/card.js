import React from "react";
import "../styles/Card.css"; // Crea este archivo CSS para dar estilo a la tarjeta

const Card = (props) => {
 const { nombre, especie, edad, raza, vacunado, esterilizado, descripcion, foto, adoptHandler, id_mascota } = props
 return (
  <div className="Card">
   <img style={{ maxWidth: "300px", maxHeight: "150px" }} src={base64(foto)} alt="" />
   <h3>{nombre}</h3>
   <p>{especie}</p>
   <p>{edad}</p>
   <p>{raza}</p>
   <p>{vacunado}</p>
   <p>{esterilizado}</p>
   <p>{descripcion}</p>
   <button className="boton-adoptar" onClick={adoptHandler}>Adoptar</button>
  </div>
 );
};

function base64(image) {
 return `data:image/jpeg;base64,${image}`
}

export default Card;

