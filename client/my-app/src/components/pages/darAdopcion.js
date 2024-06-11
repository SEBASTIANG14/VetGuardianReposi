import React, { useEffect } from 'react';
import '../../styles/RegistrarAnimal.css';
import { Form, Formik } from 'formik';
import darAdopcion from '../../api/darAdopcion.api.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar.js';
import Footer from '../footer.js';
import { getUserSession } from '../../functions/userSession.js';

const RegistrarAnimal = () => {
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
   <Formik
    initialValues={{
     nombre: "",
     edad: "",
     especie: "",
     raza: "",
     esta_esterilizado: "",
     esta_vacunado: "",
     descripcion: "",
     foto_mascota: "",
    }}
    onSubmit={async (values) => {
     console.log(values);
     try {
      const response = await darAdopcion(values);
      console.log(response);
      navigate('/mascotas');
     } catch (error) {
      console.error(error);
     }
    }}
   >
    {({ handleChange, handleSubmit }) => (
     <Form onSubmit={handleSubmit}>
      <div className="registrar-animal">
       <h1>Dar mascota en adopción</h1>
       <div className="form-group-reganimal">
        <label htmlFor="nombre">Nombre del animal</label>
        <input id="nombre" name="nombre" type="text" placeholder="Nombre del animal" onChange={handleChange} />
       </div>
       <div className="form-group-reganimal">
        <label htmlFor="edad">Edad aproximada</label>
        <input id="edad" name="edad" type="text" placeholder="Edad aproximada" onChange={handleChange} />
       </div>
       <div className="form-group-reganimal">
        <label htmlFor="especie">Especie del animal</label>
        <input id="especie" name="especie" type="text" placeholder="Especie del animal" onChange={handleChange} />
       </div>
       <div className="form-group-reganimal">
        <label htmlFor="raza">Raza</label>
        <input id="raza" name="raza" type="text" placeholder="Raza" onChange={handleChange} />
       </div>
       <div className="form-group-reganimal">
        <label htmlFor="esta_esterilizado">Esta esterilizado/castrado</label>
        <select id="esta_esterilizado" name="esta_esterilizado" onChange={handleChange}>
         <option value="">Seleccione</option>
         <option value="yes">Sí</option>
         <option value="no">No</option>
        </select>
       </div>
       <div className="form-group-reganimal">
        <label htmlFor="esta_vacunado">Esta vacunado?</label>
        <select id="esta_vacunado" name="esta_vacunado" onChange={handleChange}>
         <option value="">Seleccione</option>
         <option value="yes">Sí</option>
         <option value="no">No</option>
        </select>
       </div>
       <div className="form-group-reganimal">
        <label htmlFor="descripcion">Descripcion general del animal</label>
        <input id="descripcion" name="descripcion" type="text" placeholder="Descripcion general del animal" onChange={handleChange} />
       </div>
       <div className="form-group-reganimal">
        <label htmlFor="foto_mascota">Foto de "nombre mascota"</label>
        <div className="file-upload">
         <input id="foto_mascota" name="foto_mascota" type="file" onChange={handleChange} />
         <span>Arrastra aquí la imagen del animal</span>
        </div>
       </div>
       <div className="form-buttons-reganimal">
        <button type="button" className="cancel-button-reganimal">Cancelar</button>
        <button type="submit" className="submit-button-reganimal">Dar en adopción</button>
       </div>
      </div>
     </Form>
    )}
   </Formik>
   <Footer />
  </>
 );
};

export default RegistrarAnimal;

