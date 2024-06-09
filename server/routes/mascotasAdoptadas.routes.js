import express from "express";
import { adoptarMascota,  } from "../controllers/mascotasAdoptadas.controllers.js";

const router = express.Router();

// Ruta para adoptar una mascota
router.post("/adoptar", adoptarMascota);

export default router;
