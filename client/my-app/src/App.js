import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // Importa los estilos globales
import Login from './components/pages/login';
import Register from './components/pages/sign-up.js';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;


