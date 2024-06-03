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
      foto_mascota,
    } = req.body;

    console.log("Datos recibidos: ", req.body);

    // Verificación de que todos los campos están presentes y no son nulos o vacíos
    if (
      !nombre ||
      !edad ||
      !especie ||
      !raza ||
      !esta_esterilizado ||
      !esta_vacunado ||
      !descripcion ||
      !foto_mascota
    ) {
      console.log("Faltan campos obligatorios");
      return res.status(400).send("Faltan campos obligatorios");
    }

    try {
      const result = await pool.query(
        "INSERT INTO mascotas (nombre, edad, especie, raza, esta_esterilizado, esta_vacunado, descripcion, foto_mascota) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
          nombre,
          edad,
          especie,
          raza,
          esta_esterilizado,
          esta_vacunado,
          descripcion,
          foto_mascota,
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
