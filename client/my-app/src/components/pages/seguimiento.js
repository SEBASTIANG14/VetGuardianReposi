import React, { useEffect, useState } from 'react';
import Navbar from '../navbar.js';
import Footer from '../footer.js';
import getUser from '../../api/seguimiento.api.js';

const Seguimiento = () => {
 const user = (sessionStorage.getItem("id_usuario"))  
 if (user === null) {
  // usa el navigate para enviar a /register o /login
 }

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
    <h1>adopciones</h1>
    {adoptionsUser.map((pet) => (
     <h1>{pet.nombre_mascota_adoptada}</h1>
    ))}
    <h1>perdidas</h1>
    {lostsUser.map((pet) => (
     <h1>{pet.descripcion_mascota}</h1>
    ))}
    <h1>reportes</h1>
    {reportsUser.map((pet) => (
     <h1>{pet.descripcion_animal}</h1>
    ))}
   </div>
   <Footer />
  </>
 )
}

export default Seguimiento;
