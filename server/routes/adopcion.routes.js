import express from "express";
import { mascotas } from "../controllers/adopcion.controllers.js";
import { authenticateToken } from '../middleware/auth.js';
import { authorizeRole } from '../middleware/authorize.js';

const router = express.Router();
router.get("/mascotas",authenticateToken, authorizeRole('user'), mascotas);

export default router;
