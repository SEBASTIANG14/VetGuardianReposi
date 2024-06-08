import { pool } from '../db.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { createHash } from 'crypto';

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
  }

dotenv.config();

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Datos recibidos: ", req.body);

        // Verificación de que todos los campos están presentes y no son nulos o vacíos
        if (!email || !password) {
            console.log("Faltan campos obligatorios");
            return res.status(400).send('Faltan campos obligatorios');
        }

        try {
            // Consulta para verificar el correo y obtener el hash de la contraseña
            const [rows] = await pool.query('SELECT * FROM usuario WHERE correo = ?', [email]);

            if (rows.length > 0) {
                const user = rows[0];
                
                // Verificar la contraseña
                const isMatch = (user['contraseña'] === hash(password));
                console.log(password)
                console.log(user['contraseña'])
                if (!isMatch) {
                    console.log("Correo o contraseña incorrectos");
                    return res.status(401).send('Correo o contraseña incorrectos');
                }

                const token = jwt.sign({ id: user.id, role: user.role }, 'secret', { expiresIn: '1h' });
                console.log("Login exitoso", { id: user.id_usuario, role: user.role});
                return res.json({ id: user.id_usuario, role: user.role });
            } else {
                console.log("Correo o contraseña incorrectos");
                return res.status(401).send('Correo o contraseña incorrectos');
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error al verificar el usuario');
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (userId) => {
    const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [userId]);
    return rows[0];
};
