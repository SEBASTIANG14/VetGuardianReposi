import { Router } from 'express'
import {
 getMascotas,
 getMascota,
 createMascotas,
 updateMascota,
 deleteMascota
} from '../controllers/mascotas.controllers.js'
import { getTest, getUserStuff } from '../controllers/user.controller.js';

const router = Router();

router.get('/mascotas', getMascotas);

router.get('/mascotas', getMascotas);

router.get('/test', getTest);

router.get('/seguimiento/:id', getUserStuff);

router.get('/mascotas/:id', getMascota);

router.post('/mascotas', createMascotas);

router.put('/mascotas/:id', updateMascota);

router.delete('/mascotas/:id', deleteMascota); // quitaloa lverg

export default router;
