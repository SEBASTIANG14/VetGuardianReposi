import {pool} from '../db.js';

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
            // Consulta para verificar el correo y la contraseña
            const [rows] = await pool.query(
                'SELECT * FROM usuario WHERE correo = ? AND contraseña = ?',
                [email, password]
            );

            if (rows.length > 0) {
                console.log("Login exitoso");
                res.send('Login exitoso');
            } else {
                console.log("Correo o contraseña incorrectos");
                res.status(401).send('Correo o contraseña incorrectos');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al verificar el usuario');
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (userId) => {
    const [rows] = await pool.query('SELECT * FROM usuario WHERE id = ?', [id_usuario]);
    return rows[0];
};