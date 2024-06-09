import {pool} from '../db.js';

export const reportarDenuncia = async (req, res) => {
    try {
        const { id_usuario,fecha_reporte, especie_animal, descripcion_hechos, descripcion_animal, direccion} = req.body;
    
        console.log("Datos recibidos: ", req.body);
    
        // Verificación de que todos los campos están presentes y no son nulos o vacíos
        if (!fecha_reporte || !especie_animal || !descripcion_hechos || !descripcion_animal || !direccion
        ) {
            console.log("Faltan campos obligatorios");
            return res.status(400).send('Faltan campos obligatorios'); 
        }
    
        try {
            const result = await pool.query(
                'INSERT INTO reporte_denuncia (id_usuario,fecha_reporte, especie_animal, descripcion_hechos, descripcion_animal, direccion) VALUES (?,?, ?, ?, ?, ?)',
                [id_usuario,fecha_reporte, especie_animal, descripcion_hechos, descripcion_animal, direccion]
            );
            console.log(result);
            res.send('Reporte levantado con exito');
        } catch (error) {
            console.error(error); 
            res.status(500).send('Error al subir el reporte');
        } 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}
