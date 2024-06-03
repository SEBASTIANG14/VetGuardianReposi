import { Router } from "express";
import { darAdopcion } from "../controllers/darAdopcion.controllers.js";

const router = Router();

router.post("/darAdopcion", darAdopcion);

export default router;
