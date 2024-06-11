import React, { useEffect } from 'react';
import Navbar from '../navbar.js';
import Footer from '../footer.js';
import { useNavigate } from 'react-router-dom';
import { getUserSession } from "../../functions/userSession";

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
   <Navbar />
   <div className='vacunacion'>
    <h1>Vacunacion</h1>
   </div>
   <Footer />
  </>
 )
}

export default Vacunacion;
