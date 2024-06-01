import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Importa los estilos globales
import Login from './components/pages/login';
import Register from './components/pages/sign-up.js';
import Home from './components/pages/home.js'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
}

export default App;


