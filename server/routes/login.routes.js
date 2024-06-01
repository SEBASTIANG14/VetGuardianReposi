import { Router } from 'express';
import { login } from '../controllers/login.controllers.js'; // Asegúrate de que la ruta al controlador sea correcta

const router = Router();

// Definir la ruta para el login
router.post('/login', login);

export default router;
