import { pool } from "../db.js";

export const mascotas = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT nombre, edad, especie, raza, esta_esterilizado, esta_vacunado, descripcion, foto_mascota FROM mascotas"
    );
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
