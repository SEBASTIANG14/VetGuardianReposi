import {pool} from '../db.js';
import bcrypt from 'bcrypt';


export const createUser = async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const { name, lastname, email, password, phoneNumber, birthdate, hasPets} = req.body;
    
        console.log("Datos recibidos: ", req.body);
    
        // Verificación de que todos los campos están presentes y no son nulos o vacíos
        if (!name || !lastname || !email || !password || !phoneNumber || !birthdate || !hasPets
        ) {
            console.log("Faltan campos obligatorios"); 
            return res.status(400).send('Faltan campos obligatorios'); 
        }
    
        try {
            const result = await pool.query(
                'INSERT INTO usuario (nombre, apellidos, correo, contraseña, telefono, cumpleaños, tiene_mascotas, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [name, lastname, email, hashedPassword, phoneNumber, birthdate, hasPets, 'user']
            );
            console.log(result);
            res.send('Usuario Registrado con exito');
        } catch (error) {
            console.error(error); 
            res.status(500).send('Error al registrarse');
        } 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}