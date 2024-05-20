import {Router} from 'express'
import {
    getMascotas,
    getMascota,
    createMascotas,
    updateMascota,
    deleteMascota
} from '../controllers/mascotas.controllers.js'

const router = Router();

router.get('/mascotas', getMascotas);

router.get('/mascotas/:id', getMascota);

router.post('/mascotas', createMascotas);

router.put('/mascotas/:id', updateMascota);

router.delete('/mascotas/:id', deleteMascota);

export default router;