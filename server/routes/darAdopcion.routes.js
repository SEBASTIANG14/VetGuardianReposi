import { Router } from "express";
import { pool } from '../db.js';
import { darAdopcion } from "../controllers/darAdopcion.controllers.js";
import { createRequire } from "module";
import { useId } from "react";

const require = createRequire(import.meta.url);
const multer = require('multer')

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();


router.post("/darAdopcion", upload.single('foto_mascota'), async (req, res) => {
 try {
  const {
   nombre,
   edad,
   especie,
   raza,
   esta_esterilizado,
   esta_vacunado,
   descripcion,
  } = req.body;

  const foto_mascota = req.file ? req.file.buffer : null;
  console.log("Datos recibidos: ", req.body);

  try {
   await pool.query(
    "INSERT INTO mascotas (nombre, edad, especie, raza, esta_esterilizado, esta_vacunado, descripcion, foto_mascota, imagen) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?)",
    [
     nombre,
     edad,
     especie,
     raza,
     esta_esterilizado,
     esta_vacunado,
     descripcion,
     "asdf",
     foto_mascota,
    ]
   );
   res.send("Mascota Registrada con éxito");
  } catch (error) {
   console.error(error);
   res.status(500).send("Error al registrarse");
  }
 } catch (error) {
  return res.status(500).json({ message: error.message });
 }
});
router.post('/api/registro_usuario', upload.single('fotoPerfil'), async (req, res) => {
 const { nombre, apellido, email, contrasena, telefono, fechaNacimiento, genero } = req.body;
 const fotoPerfil = req.file ? req.file.buffer : null;
 try {
  const result = await pool.query(
   "INSERT INTO ramses (nombre, apellido, email, contraseña, nivel_access, telefono, fecha_nacimiento, genero, foto_perfil) VALUES (?, ?, ?, ?, 1, ?, ?, ?, ?)",
   [
    nombre,
    apellido,
    email,
    contrasena,
    telefono,
    fechaNacimiento,
    genero,
    fotoPerfil
   ]
  );
  res.send("ramses Registrada con éxito");
 } catch (error) {
  console.error(error);
  res.status(500).send("Error al registrarse");
 }
});

router.get('/api/obtener_usuario/:id', async (req, res) => {
 const userId = req.params.id;
 const query = 'SELECT foto_perfil FROM ramses WHERE id = ?';
 const [rows] = await pool.query('SELECT foto_perfil FROM ramses WHERE id = ?', [userId]);
 const user = rows[0];
 if (user.foto_perfil) {
  // Convertir la imagen a base64 si existe
  user.foto_perfil = user.foto_perfil.toString('base64');
 }
 res.status(200).send({ success: true, data: user });
});
router.post("/adoptar ", darAdopcion);

export default router;
