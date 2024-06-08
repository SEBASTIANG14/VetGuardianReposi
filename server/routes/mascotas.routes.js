import {Router} from 'express'
import {
    getMascotas,
    getMascota,
    createMascotas,
    updateMascota,
    deleteMascota
} from '../controllers/mascotas.controllers.js'
import { authenticateToken } from '../middleware/auth.js';
import { authorizeRole } from '../middleware/authorize.js';

const router = Router();

router.get('/mascotas', authenticateToken, authorizeRole('user'), getMascotas);

router.get('/mascotas/:id', authenticateToken, authorizeRole('user'), getMascota);

router.post('/mascotas', authenticateToken, authorizeRole('user'), createMascotas);

router.put('/mascotas/:id', authenticateToken, authorizeRole('user'), updateMascota);

router.delete('/mascotas/:id', authenticateToken, authorizeRole('user'), deleteMascota);

export default router;