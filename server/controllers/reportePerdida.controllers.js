import {pool} from '../db.js';

export const reportarPerdida = async (req, res) => {
    try {
        const { id_usuario,nombre_mascota, especie_mascota, raza_mascota, descripcion_mascota, ubicacion_perdida, fecha_perdida, recompensa} = req.body;
    
        console.log("Datos recibidos: ", req.body);
    
        // Verificación de que todos los campos están presentes y no son nulos o vacíos
        if (!nombre_mascota || !especie_mascota || !raza_mascota || !descripcion_mascota || !ubicacion_perdida || !fecha_perdida || !recompensa
        ) {
            console.log("Faltan campos obligatorios");
            return res.status(400).send('Faltan campos obligatorios'); 
        }
    
        try {
            const result = await pool.query(
                'INSERT INTO reporte_perdida (id_usuario,nombre_mascota, especie_mascota, raza_mascota, descripcion_mascota, ubicacion_perdida, fecha_perdida, recompensa) VALUES (?,?, ?, ?, ?, ?, ?, ?)',
                [id_usuario,nombre_mascota, especie_mascota, raza_mascota, descripcion_mascota, ubicacion_perdida, fecha_perdida, recompensa]
            );
            console.log(result);
            res.send('Reporte de perdida registrado con exito');
        } catch (error) {
            console.error(error); 
            res.status(500).send('Error al registrar el reporte');
        } 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}
