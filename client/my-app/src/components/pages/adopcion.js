import React, { useState, useEffect } from "react";
import "../../styles/Adopcion.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../card.js";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import { verAdopciones, adoptarMascota } from "../../api/adopcion.api.js";
import { getUserSession } from "../../functions/userSession";

const Adopcion = () => {
 const navigate = useNavigate()
 const user = getUserSession()
 useEffect(() => {
  if (user === null) {
   navigate("/login")
  }
 }, []);
 const [mascotas, setMascotas] = useState([]);


 useEffect(() => {
  const fetchData = async () => {
   const result = await verAdopciones();
   setMascotas(result.data);
  };
  fetchData();
 }, []);

 const handleAdoptar = async (id_usuario, id_mascota) => {
  try {
   await adoptarMascota(id_usuario, id_mascota);
   alert("Mascota adoptada con éxito");
   // Actualizar la lista de mascotas
   const result = await verAdopciones();
   setMascotas(result.data);
  } catch (error) {
   console.error("Error al adoptar la mascota", error);
   alert("Error al adoptar la mascota");
  }
 };

 return (
  <>
   <Navbar />
   <div className="home-adopcion">
    <h1>Adopta una mascota, ¡no te arrepentirás del amor que te dan!</h1>
    <Link to="/registroAnimal">
     <button type="submit" className="boton-registrar-animal">
      Registrar animal para dar en adopción
     </button>
    </Link>
    <div className="contenedor-tarjetas-mascotasAdopcion">
     {mascotas.map((mascota) => (
      <Card
       key={mascota.id_mascota}
       id_mascota={mascota.id_mascota}
       nombre={mascota.nombre}
       especie={mascota.especie}
       edad={mascota.edad}
       raza={mascota.raza}
       vacunado={mascota.esta_vacunado}
       esterilizado={mascota.esta_esterilizado}
       descripcion={mascota.descripcion}
       foto={mascota.foto_mascota}
       adoptHandler={() => handleAdoptar(user, mascota.id_mascota)} // 1 es un id_usuario de ejemplo
      />
     ))}
    </div>
   </div>
   <Footer />
  </>
 );
};

export default Adopcion;


