import React, { useEffect, useState } from 'react';
import Navbar from '../navbar.js';
import Footer from '../footer.js';
import getUser from '../../api/seguimiento.api.js';
import { useNavigate } from 'react-router-dom';
import { getUserSession } from "../../functions/userSession";

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
