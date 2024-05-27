import React from 'react';
import '../../styles/Login.css'; // Importa los estilos CSS específicos del componente

const Login = () => {
  return (
    <div className="login-container">
      <header className="login-header">
        <h1>VetGuardian</h1>
      </header>
      <div className="login-content">
        <h2>Inicio de sesión</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Nombre usuario o correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="button-group">
            <button type="button" className="cancel-button">Cancelar</button>
            <button type="submit" className="login-button">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

      
   
