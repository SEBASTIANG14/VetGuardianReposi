import React, { useState } from 'react';
import '../../styles/RegistrarAnimal.css';
// import { Form, Formik } from 'formik';
import darAdopcion from '../../api/darAdopcion.api.js';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar.js';
import Footer from '../footer.js';
import CustomInput from '../input';

const RegistrarAnimal = () => {
 const navigate = useNavigate();
 const [form, setForm] = useState({
  nombre: "",
  edad: "",
  especie: "",
  raza: "",
  esta_esterilizado: "yes",
  esta_vacunado: "yes",
  descripcion: "",
  foto_mascota: null
 })
 console.log(form)

 const handleChange = (e) => {
  const { name, value } = e.target;
  setForm({
   ...form,
   [name]: value,
  });
 }

 return (
  <>
   <Navbar />
   <form
    onSubmit={async (e) => {
     e.preventDefault()
     try {
      const formData = new FormData();
      for (const key in form) {
       formData.append(key, form[key])
      }
      const response = await darAdopcion(formData);
      console.log(response);
     } catch (error) {
      console.error(error);
     }
    }}
   >
    <div className="registrar-animal">
     <h1>Dar mascota en adopción</h1>
     <CustomInput
      innerText="Nombre del animal"
      descriptor="nombre"
      field={form.nombre}
      handler={handleChange}
      placeholder="Nombre"
     />
     <CustomInput
      innerText="Raza del animal"
      descriptor="raza"
      field={form.raza}
      handler={handleChange}
      placeholder="Raza"
     />
     <CustomInput
      innerText="Edad aproximada"
      descriptor="edad"
      field={form.edad}
      handler={handleChange}
      placeholder="Edad aproximada"
     />
     <CustomInput
      innerText="Especie del animal"
      descriptor="especie"
      field={form.especie}
      handler={handleChange}
      placeholder="Especie del animal"
     />
     <div className="form-group-reganimal">
      <label htmlFor="">¿Está esterilizado/castrado?</label>
      <select id="esta_esterilizado" name="esta_esterilizado" value={form.esta_esterilizado} onChange={(e) => setForm({
       ...form,
       "esta_esterilizado": e.target.value,
      })}>
       <option value="yes">Sí</option>
       <option value="no">No</option>
      </select>
     </div>
     <div className="form-group-reganimal">
      <label htmlFor="esta_vacunado">¿Está vacunado?</label>
      <select id="esta_vacunado" name="esta_vacunado" value={form.esta_vacunado} onChange={(e) => setForm({
       ...form,
       "esta_vacunado": e.target.value,
      })}>
       <option value="yes">Sí</option>
       <option value="no">No</option>
      </select>
     </div>
     <CustomInput
      innerText="Descripción general del animal"
      descriptor="descripcion"
      field={form.descripcion}
      handler={handleChange}
      placeholder="Descripción general del animal"
     />
     <div className="form-group-reganimal">
      <label htmlFor="foto_mascota">Foto de la mascota</label>
      <div className="file-upload">
       <input id="foto_mascota" name="foto_mascota" type="file" onChange={(e) => {
        setForm(
         {
          ...form,
          "foto_mascota": e.target.files[0],
         }
        )
       }} />
       <span>Arrastra aquí la imagen del animal</span>
      </div>
     </div>
     <div className="form-buttons-reganimal">
      <button type="button" className="cancel-button-reganimal">Cancelar</button>
      <button type="submit" className="submit-button-reganimal">Dar en adopción</button>
     </div>
    </div>
   </form>
   <Footer />
  </>)
}

//  return (
//   <>
//    <Navbar />
//    <Formik
//     initialValues={{
//      nombre: "",
//      edad: "",
//      especie: "",
//      raza: "",
//      esta_esterilizado: "",
//      esta_vacunado: "",
//      descripcion: "",
//      foto_mascota: photo,
//     }}
//     onSubmit={async (values) => {
//      console.log(values);
//      try {
//       const response = await darAdopcion(values);
//       console.log(response);
//       navigate('/mascotas');
//      } catch (error) {
//       console.error(error);
//      }
//     }}
//    >
//     {({ handleChange, handleSubmit }) => (
//     )}
//    </Formik>
//    <Footer />
//   </>
//  );
// };
//
export default RegistrarAnimal;

