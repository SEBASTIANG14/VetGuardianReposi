import React, { useEffect, useState } from 'react';
import Navbar from '../navbar.js';
import Footer from '../footer.js';
import getUserProfile from '../../api/perfil.api.js';
import { getUserSession } from '../../functions/userSession.js';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
 const navigate = useNavigate()
 const user = getUserSession()
 useEffect(() => {
  if (user === null) {
   navigate("/login")
  }
 }, []);
 const [userProfile, setUserProfile] = useState({})

 useEffect(() => {
  const fetchData = async () => {
   const { profile } = await getUserProfile(user);
   setUserProfile(profile[0])
  };
  fetchData();
 }, []);

 return (
  <>
   <Navbar />
   <div className='perfil'>
    <div className='personal-info'>
     <h1>Nombres </h1>
     <h1>{userProfile["nombre"]}</h1>
     <h1>Apellidos</h1>
     <h1>{userProfile["apellidos"]}</h1>
    </div>
    <div className='email-info'>
     <h1>Correo electrónico</h1>
     <h1>{userProfile["correo"]}</h1>
     <h1>Número telefónico</h1>
     <h1>{userProfile["telefono"]}</h1>
     <h1>Fecha de cumpleaños</h1>
     <h1>{userProfile["cumpleaños"]}</h1>
    </div>
   </div>
   <Footer />
  </>
 )
}

export default Perfil;
