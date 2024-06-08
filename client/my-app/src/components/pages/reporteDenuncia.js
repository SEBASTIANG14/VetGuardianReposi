import React from 'react';
import '../../styles/reporteDenuncia.css';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Denuncia from '../../api/reporteDenuncia.api.js';
import Navbar from '../navbar.js';
import Footer from '../footer.js';

const HacerDenuncia = () => {
  const navigate = useNavigate();
  return (
    <div className='denuncia-container'>
      <Navbar/>
      <Formik
        initialValues={{
          fecha_reporte: "",
          especie_animal: "",
          descripcion_hechos: "",
          descripcion_animal: "",
          direccion: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await Denuncia(values);
            console.log(response);
            navigate('/home');
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="hacer-denuncia">
              <h1>Hacer una denuncia</h1>
              <div className="form-group-denuncia">
                <label>Fecha del día que vio el maltrato</label>
                <input
                  id='fecha_reporte'
                  name='fecha_reporte'
                  type="date"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-denuncia">
                <label>Especie del animal</label>
                <input
                  id='especie_animal'
                  name='especie_animal'
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-denuncia">
                <label>Descripción de los hechos</label>
                <textarea
                  id='descripcion_hechos'
                  name='descripcion_hechos'
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group-denuncia">
                <label>Descripción del o los animales afectados</label>
                <input
                  id='descripcion_animal'
                  name='descripcion_animal'
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-denuncia">
                <label>Ubicación de los hechos</label>
                <input
                  id='direccion'
                  name='direccion'
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div className="form-buttons-denuncia">
                <button type="button" className="cancel-button-denuncia">
                  Cancelar
                </button>
                <button type="submit" className="submit-button-denuncia">
                  Denunciar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Footer/>
    </div>
  );
};

export default HacerDenuncia;
