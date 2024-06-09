import { Router } from "express";
import { darAdopcion } from "../controllers/darAdopcion.controllers.js";
import { authenticateToken } from '../middleware/auth.js';
import { authorizeRole } from '../middleware/authorize.js';

const router = Router();

router.post("/darAdopcion", darAdopcion);
router.post("/adoptar ", darAdopcion);

export default router;
