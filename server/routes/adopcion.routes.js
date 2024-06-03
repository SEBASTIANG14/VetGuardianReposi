import express from "express";
import { mascotas } from "../controllers/adopcion.controllers.js";

const router = express.Router();
router.get("/mascotas", mascotas);

export default router;
