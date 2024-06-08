import React from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import '../../styles/Login.css'; // Importa los estilos CSS específicos del componente
import loginUser from '../../api/login.api';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container"> 
      <header className="login-header">
        <h1>VetGuardian</h1>
      </header>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await loginUser(values);
            console.log(response);
              navigate('/home'); // Redirigir a la página de inicio
              // Manejar caso de error en el inicio de sesión
            } catch (error) {
              if (error.response.data || error.response) {
                alert('Correo o contraseña incorrectos');
              }else{
                console.error(error);
                alert('Error al iniciar sesión');
              }
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="login-content">
              <h2>Inicio de sesión</h2>
              <div className="form-group-login">
                <label htmlFor="email">Nombre usuario o correo electrónico</label>
                <input type="email" id="email" name="email" required onChange={handleChange} />
              </div>
              <div className="form-group-login">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" required onChange={handleChange} />
              </div>
              <div className="button-group-login">
                <button type="button" className="cancel-button-login">Cancelar</button>
                <button type="submit" className="login-button">Iniciar sesión</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;




      
   
