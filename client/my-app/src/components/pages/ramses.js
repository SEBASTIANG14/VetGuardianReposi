import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Ramses() {
 const [nombre, setNombre] = useState('');
 const [apellido, setApellido] = useState('');
 const [email, setEmail] = useState('');
 const [contrasena, setContrasena] = useState('');
 const [telefono, setTelefono] = useState('');
 const [fechaNacimiento, setFechaNacimiento] = useState('');
 const [genero, setGenero] = useState('');
 const [fotoPerfil, setFotoPerfil] = useState(null);
 const [url, setUrl] = useState(null);
 const [alerta, setAlerta] = useState('');
 const [mostrarAlerta, setMostrarAlerta] = useState(false);
 const navigate = useNavigate();


 useEffect(() => {
  if (alerta) {
   setMostrarAlerta(true);
   const timer = setTimeout(() => {
    setMostrarAlerta(false);
    setAlerta('');
   }, 5000);
   return () => clearTimeout(timer);
  }
 }, [alerta]);

 useEffect(() => {
  const fetchData = async () => {
   const res = await axios.get("http://localhost:4000/api/obtener_usuario/1")
   setUrl(`data:image/jpeg;base64,${res.data.data.foto_perfil}`);
  };
  fetchData();
 }, []);


 const handleSubmit = async (event) => {
  event.preventDefault();
  if (!contrasena) {
   setAlerta('Por favor, ingresa una contraseña');
   return;
  }

  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('apellido', apellido);
  formData.append('email', email);
  formData.append('contrasena', contrasena);
  formData.append('telefono', telefono);
  formData.append('fechaNacimiento', fechaNacimiento);
  formData.append('genero', genero);

  if (fotoPerfil) {
   formData.append('fotoPerfil', fotoPerfil);
  }

  try {
   const response = await axios.post('http://localhost:4000/api/registro_usuario', formData, {
    headers: {
     'Content-Type': 'multipart/form-data'
    }
   });
   console.log('Usuario registrado:', response.data);
   setNombre('');
   setApellido('');
   setEmail('');
   setContrasena('');
   setTelefono('');
   setFechaNacimiento('');
   setGenero('');
   setFotoPerfil(null);
   setAlerta('Usuario registrado exitosamente');
   navigate('/home');
  } catch (error) {
   console.error('Error registrando usuario:', error);
   setAlerta('Error registrando usuario');
  }
 };

 const handleFileChange = (event) => {
  setFotoPerfil(event.target.files[0]);
 };

 return (
  <div className="login-container">
   <img src={url} alt="" />
   <div className="login-box">
    <div className="login-content">
     <h2 className="login-title">Registro</h2>
     <div className="register-link">
      ¿Ya tienes cuenta? <Link to="/">Iniciar sesión</Link>
     </div>
     <form onSubmit={handleSubmit} className='formRegister'>
      <div className="login-field">
       <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
        className="input-field"
        required
       />
       <label className="input-label">Nombre</label>
      </div>
      <div className="login-field">
       <input
        type="text"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        placeholder="Apellido"
        className="input-field"
        required
       />
       <label className="input-label">Apellido</label>
      </div>
      <div className="login-field">
       <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="input-field"
        required
       />
       <label className="input-label">Email</label>
      </div>
      <div className="login-field">
       <input
        type="password"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        placeholder="Contraseña"
        className="input-field"
        required
       />
       <label className="input-label">Contraseña</label>
      </div>
      <div className="login-field">
       <input
        type="tel"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        placeholder="Teléfono"
        className="input-field"
       />
       <label className="input-label">Teléfono</label>
      </div>
      <div className="login-field">
       <input
        type="date"
        value={fechaNacimiento}
        onChange={(e) => setFechaNacimiento(e.target.value)}
        placeholder="Fecha de Nacimiento"
        className="input-field"
       />
       <label className="input-label">Fecha de Nacimiento</label>
      </div>
      <div className="login-field">
       <select
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        className="input-field select-field"
       >
        <option value="">Seleccione</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Otro">Otro</option>
       </select>
       <label className="input-label">Género</label>
      </div>
      <div className="login-field">
       <input
        type="file"
        onChange={handleFileChange}
        className="input-field"
       />
       <label className="input-label">Foto de Perfil</label>
      </div>
      <button type="submit" className="login-button">Registrarse</button>
     </form>
     {mostrarAlerta && <div className="alerta">{alerta}</div>}
    </div>
    <div className="login-image">
     <img src="https://www.anicura.es/cdn-cgi/image/f=auto,q=60,fit=cover,w=1440,h=1080,g=auto,sharpen=1/AdaptiveImages/powerinit/59231/Puppy%20Header.png?stamp=eedac2d7ef0f5ba3441583da00fd7add601ba375" alt="Login" />
    </div>
   </div>
  </div>
 );
}

export default Ramses;
