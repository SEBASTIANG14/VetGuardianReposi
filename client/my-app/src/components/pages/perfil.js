import React, { useEffect, useState } from 'react';
import Navbar from '../navbar.js';
import Footer from '../footer.js';
import '../../styles/Profile.css';
import getUserProfile from '../../api/perfil.api.js';
import { getUserSession } from '../../functions/userSession.js';
import { useNavigate } from 'react-router-dom';
import CustomField from '../field.js';

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


 let newDate

 if (userProfile["cumpleaños"] !== undefined) {
  newDate = userProfile["cumpleaños"].split("T")[0]
 }

 return (
  <>
   <Navbar />
   <main className='profile'>
    <h1>Perfil de usuario</h1>
    <div className='personal-info'>
     <CustomField fieldTitle={"Nombres"} fieldContent={userProfile["nombre"]} />
     <CustomField fieldTitle={"Apellidos"} fieldContent={userProfile["apellidos"]} />
    </div>
    <div className='email-info'>
     <CustomField fieldTitle={"Correo electrónico"} fieldContent={userProfile["correo"]} />
     <CustomField fieldTitle={"Número telefónico"} fieldContent={userProfile["telefono"]} />
     <CustomField fieldTitle={"Fecha de cumpleaños"} fieldContent={newDate} />
    </div>
   </main>
   <Footer />
  </>
 )
}

export default Perfil;
