import React from 'react';
import { Form, Formik } from 'formik';
import '../../styles/signup.css'; // Importa los estilos CSS específicos del componente
import registerUser from '../../api/register.api';
import { useNavigate } from 'react-router-dom';


const Register = () => {
 const navigate = useNavigate()
  return (
    <div className="register-container">
      <header className="register-header">
        <h1>VetGuardian</h1>
        <button className="veterinarian-register-button">
          Registrarse como Veterinario
        </button>
      </header>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          password: "",
          phoneNumber: "",
          birthdate: "",
          hasPets: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await registerUser(values);
            console.log(response);
            navigate('/Login');

          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="register-content">
              <h2>Registro</h2>
              <div className="form-group-register">
                <label htmlFor="fullName">Nombre</label>
                <input type="text" id="name" name="name" required onChange={handleChange} />
              </div>
              <div className="form-group-register">
                <label htmlFor="username">Apellidos</label>
                <input type="text" id="lastname" name="lastname" required onChange={handleChange} />
              </div>
              <div className="form-group-register">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" name="email" required onChange={handleChange} />
              </div>
              <div className="form-group-register">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" required onChange={handleChange} />
              </div>
              <div className="form-group-register">
                <label htmlFor="phoneNumber">Número telefónico</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" required onChange={handleChange} />
              </div>
              <div className="form-group-register">
                <label htmlFor="birthdate">Fecha de nacimiento</label>
                <input type="date" id="birthdate" name="birthdate" required onChange={handleChange} />
              </div>
              <div className="form-group-register">
                <label htmlFor="hasPets">Tiene mascotas</label>
                <select id="hasPets" name="hasPets" required onChange={handleChange}>
                  <option value="">Seleccionar</option>
                  <option value="Si">Sí</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="button-group-register">
                <button type="button" className="cancel-button-register">Cancelar</button>
                <button type="submit" className="register-button">Registrarse</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
