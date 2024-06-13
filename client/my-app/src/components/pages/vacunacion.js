import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserSession } from "../../functions/userSession";
import '../../styles/Veterinarios.css';
import Footer from '../footer';
import Navbar from '../navbar';

const Vacunacion = () => {
 const navigate = useNavigate()
 const user = getUserSession()
 useEffect(() => {
  if (user === null) {
   navigate("/login")
  }
 }, []);
 return (
  <>
   <Navbar/>
  <div className="container">
      <h1>VACUNACIÓN</h1>
      <div className="box">
        <h2>Veterinarios Confiables</h2>
        <div className="vet">
          <p>Dr. Pedro Eduardo Vargas Suarez</p>
          <p>Calle Erizo de mar elconchalito y cangrejo #8976 Col. Esperanza 1</p>
          <p>Teléfono: 6131589643</p>
          <p>Veterinaria +Cota</p>
        </div>
        <div className="vet">
          <p>Dr. Marcos Abraham Zumaya Camacho</p>
          <p>Calle Miguel Hidalgo en esquina con Cuauhtémoc #324 Col. Chametla</p>
          <p>Teléfono: 6121478540</p>
          <p>Veterinaria El perro Feliz</p>
        </div>
        <div className="vet">
          <p>Dra. Ana Nicole Villa Valdez</p>
          <p>Calle Ignacio Allende el Altamirano y victoria #1099 Col. Centro</p>
          <p>Teléfono: 6121099691</p>
          <p>Veterinaria Gatunos</p>
        </div>
        <div className="vet">
          <p>Dr. Alfonso Jiménez Fernández</p>
          <p>Calle Venustiano Carranza el Zapata y Forjadores #10872 Col. Santa Fe</p>
          <p>Teléfono: 6121009811</p>
          <p>Veterinaria Sol de Mayo</p>
        </div>
      </div>
    </div>
   <Footer/>
  </>
 )
}

export default Vacunacion;
