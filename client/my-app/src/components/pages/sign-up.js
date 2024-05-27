import React from 'react';
import '../../styles/signup.css'; // Importa los estilos CSS específicos del componente

const Register = () => {

  return (
    <div className="register-container">
      <header className="register-header">
        <h1>VetGuardian</h1>
        <button 
          className="veterinarian-register-button" 
        >
          Registrarse como Veterinario
        </button>
      </header>
      <div className="register-content">
        <h2>Registro</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Nombre Completo</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className="form-group">
            <label htmlFor="hasPets">Tiene mascotas</label>
            <select id="hasPets" name="hasPets" required>
              <option value="">Seleccionar</option>
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Número telefónico</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Fecha de nacimiento</label>
            <input type="date" id="birthdate" name="birthdate" required />
          </div>
          <div className="button-group">
            <button type="button" className="cancel-button">Cancelar</button>
            <button type="submit" className="register-button">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
