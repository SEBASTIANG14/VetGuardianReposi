import { Router } from "express";
import {reportarPerdida} from "../controllers/reportePerdida.controllers.js";
import { authenticateToken } from '../middleware/auth.js';
import { authorizeRole } from '../middleware/authorize.js';

const router = Router()

router.post('/reportePerdida', reportarPerdida)

export default router;