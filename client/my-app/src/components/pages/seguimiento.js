import React, { useEffect, useState } from 'react';
import Navbar from '../navbar.js';
import Footer from '../footer.js';
import getUser from '../../api/seguimiento.api.js';
import { useNavigate } from 'react-router-dom';
import { getUserSession } from "../../functions/userSession";
import '../../styles/Seguimiento.css';
const Seguimiento = () => {
 const navigate = useNavigate()
 const user = getUserSession()
 useEffect(() => {
  if (user === null) {
   navigate("/login")
  }
 }, []);

 const [adoptionsUser, setAdoptions] = useState([])
 const [lostsUser, setLosts] = useState([])
 const [reportsUser, setReports] = useState([])

 useEffect(() => {
  const fetchData = async () => {
   const { adoptions, losts, reports } = await getUser(JSON.parse(user));
   setAdoptions(adoptions)
   setLosts(losts)
   setReports(reports)
  };
  fetchData();
 }, []);

 return (
  <>
   <Navbar />
   <div className='seguimiento'>
    <h1>Mis Adopciones</h1>
    {adoptionsUser.map((pet) => (
     <div>
      <span>Nombre de la mascota: </span>
      <span>{pet.nombre_mascota_adoptada}</span>
      <br/>
      <span>Especie: </span>
      <span>{pet.especie_mascota_adoptada}</span>
      <br/>
      <span>Raza: </span>
      <span>{pet.raza_mascota_adoptada}</span>
      <br/>
      <span>Edad: </span>
      <span>{pet.edad_mascota_adoptada}</span>
      <br/>
      <img style={{maxWidth:"300px", maxHeight:"300px"}} src={base64(pet.imagen)} alt="" />
     </div>
    ))}
    <h1>Mis Mascotas Perdidas</h1>
    {lostsUser.map((pet) => (
     <div>
      <span>Descripción mascota: </span>
      <span>{pet.descripcion_mascota}</span>
      <br/>
      <span>Especie: </span>
      <span>{pet.especie_mascota}</span>
      <br/>
      <span>Raza: </span>
      <span>{pet.raza_mascota}</span>
      <br/>
      <span>Fecha perdida: </span>
      <span>{pet.fecha_perdida}</span>
      <br/>
      <span>Recompensa: </span>
      <span>{pet.fecha_perdida}</span>
     </div>

    ))}
    <h1>Reportes</h1>
    {reportsUser.map((pet) => (
     <div>
     <span>Descripción del animal: </span>
     <span>{pet.descripcion_animal}</span>
      <br/>
     <span>Fecha del reporte: </span>
     <span>{pet.fecha_reporte}</span>
      <br/>
     <span>Descripción hechos: </span>
     <span>{pet.fecha_reporte}</span>
      <br/>
     <span>Descripción animal: </span>
     <span>{pet.descripcion_animal}</span>
      <br/>
     <span>Dirección: </span>
     <span>{pet.direccion}</span>
     </div>
    ))}
   </div>
   <Footer />
  </>
 )
}

function base64(image) {
 return `data:image/jpeg;base64,${image}`
}

export default Seguimiento;
 