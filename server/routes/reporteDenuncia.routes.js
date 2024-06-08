import { Router } from "express";
import {reportarDenuncia} from "../controllers/reporteDenuncia.controllers.js";
import { authenticateToken } from '../middleware/auth.js';
import { authorizeRole } from '../middleware/authorize.js';

const router = Router()

router.post('/reporteDenuncia', authenticateToken, authorizeRole('user'), reportarDenuncia)

export default router;