import React from 'react';
import '../../styles/reportePerdida.css';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Perdida from '../../api/reportePerdida.api.js';
import Navbar from '../navbar.js';
import Footer from '../footer.js'

const ReportarPerdida = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className="report-container-perdida">
    <Formik
        initialValues={{
          nombre_mascota: "",
          especie_mascota: "",
          raza_mascota: "",
          descripcion_mascota: "",
          ubicacion_perdida: "",
          fecha_perdida: "",
          recompensa: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await Perdida(values);
            console.log(response);
            navigate('/home');
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
        <h1>Reportar mascota perdida</h1>
          <div className="form-group-perdida">
            <label>Nombre de su mascota</label>
            <input id='nombre_mascota' name='nombre_mascota' type="text" onChange={handleChange} />
          </div>
          <div className="form-group-perdida">
            <label>Especie de su mascota</label>
            <input id='especie_mascota' name='especie_mascota' type="text" onChange={handleChange} />
          </div>
          <div className="form-group-perdida">
            <label>Raza de su mascota</label>
            <input id='raza_mascota' name='raza_mascota' type="text" onChange={handleChange} />
          </div>
          <div className="form-group-perdida">
            <label>Descripcion (rasgos unicos, color de pelo, etcetera)</label>
            <textarea id='descripcion_mascota' name='descripcion_mascota' onChange={handleChange} ></textarea>
          </div>
          <div className="form-group-perdida">
            <label>Lugar visto por ultima vez</label>
            <input id='ubicacion_perdida' name='ubicacion_perdida' type="text" onChange={handleChange} />
          </div>
          <div className="form-group-perdida">
            <label>Fecha de perdida</label>
            <input id='fecha_perdida' name='fecha_perdida' type="date" onChange={handleChange} />
          </div>
          <div className="form-group-perdida">
            <label>Recompensa (Ingrese solo el numero de la cantidad deseada)</label>
            <input id='recompensa' name='recompensa' type="text" onChange={handleChange} />
          </div>
          <div className="button-group-perdida">
            <button type="button" className="cancel-button-perdida">Cancelar</button>
            <button type="submit" className="report-button-perdida">Reportar</button>
          </div>
      </Form>
      )}
    </Formik>
</div>
  <Footer/>
</>
  );
};

export default ReportarPerdida;