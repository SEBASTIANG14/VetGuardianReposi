import { Router } from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM mascotas');
        console.log(rows);
        res.json(rows);
    } catch (error) {
        console.error('Error al procesar la solicitud: ', error);
        res.status(500).send('Ha ocurrido un error interno');
    }
});

export default router;
