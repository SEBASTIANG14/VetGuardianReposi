import React from 'react';
import '../../styles/Home.css'; 
import Navbar from '../navbar.js';
import Footer from '../footer.js'

const perfilUsuario = () => {
    return (
    <>
        <Navbar/>
            <div>
                <h1>Perfil de Usuario</h1>
            </div>
        <Footer/>
    </>
    )
}

export default perfilUsuario;