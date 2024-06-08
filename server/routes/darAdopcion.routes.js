import { Router } from "express";
import { darAdopcion } from "../controllers/darAdopcion.controllers.js";
import { authenticateToken } from '../middleware/auth.js';
import { authorizeRole } from '../middleware/authorize.js';

const router = Router();

router.post("/darAdopcion", authenticateToken, authorizeRole('user'), darAdopcion);

export default router;
