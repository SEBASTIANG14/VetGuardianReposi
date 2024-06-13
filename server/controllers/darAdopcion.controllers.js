import { pool } from "../db.js";

export const darAdopcion = async (req, res) => {
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

  const foto = req.file ? req.file.buffer : null;
  console.log("Datos recibidos: ", req.body);

  try {
   await pool.query(
    "INSERT INTO mascotas (nombre, edad, especie, raza, esta_esterilizado, esta_vacunado, descripcion, foto_mascota) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
     nombre,
     edad,
     especie,
     raza,
     esta_esterilizado,
     esta_vacunado,
     descripcion,
     foto,
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
};

export const adoptar = async (req, res) => {
 try {
  const {
   id_usuario,
   id_mascota,
   nombre_mascota_adoptada,
   especie_mascota_adoptada,
   raza_mascota_adoptada,
   edad_mascota_adoptada,
  } = req.body;

  if (
   !id_usuario &&
   !id_mascota &&
   !nombre_mascota_adoptada &&
   !especie_mascota_adoptada &&
   !raza_mascota_adoptada &&
   !edad_mascota_adoptada 
  ) {
   console.log("Faltan campos obligatorios");
   return res.status(400).send("Faltan campos obligatorios");
  }

  try {
   const result = await pool.query(
    "INSERT INTO adopciones (id_usuario, id_mascota, nombre_mascota_adoptada, especie_mascota_adoptada, raza_mascota_adoptada, edad_mascota_adoptada) VALUES (?, ?, ?, ?, ?, ?)",
    [
     id_usuario,
     id_mascota,
     nombre_mascota_adoptada,
     especie_mascota_adoptada,
     raza_mascota_adoptada,
     edad_mascota_adoptada,
    ]
   );
   console.log(result);
   res.send("Mascota Registrada con éxito");
  } catch (error) {
   console.error(error);
   res.status(500).send("Error al registrarse");
  }
 } catch (error) {
  return res.status(500).json({ message: error.message });
 }
};

  // // Verificación de que todos los campos están presentes y no son nulos o vacíos
  // if (
  //  !nombre ||
  //  !edad ||
  //  !especie ||
  //  !raza ||
  //  !esta_esterilizado ||
  //  !esta_vacunado ||
  //  !descripcion 
  // ) {
  //  console.log("Faltan campos obligatorios");
  //  return res.status(400).send("Faltan campos obligatorios");
  // }
  // console.log(foto_mascota)
