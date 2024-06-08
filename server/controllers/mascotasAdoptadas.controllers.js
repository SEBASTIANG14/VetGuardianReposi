import { pool } from "../db.js";

export const adoptarMascota = async (req, res) => {
  const { id_usuario, id_mascota } = req.body;

  try {
    // Obtener la información de la mascota
    const [mascota] = await pool.query("SELECT * FROM mascotas WHERE id_mascota = ?", [id_mascota]);

    if (mascota.length === 0) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }

    const {
      nombre,
      edad,
      especie,
      raza,
      esta_esterilizado,
      esta_vacunado,
      descripcion,
      foto_mascota
    } = mascota[0];

    // Insertar la información en la tabla adopciones
    await pool.query(
      "INSERT INTO adopciones (id_usuario, id_mascota, nombre_mascota_adoptada, especie_mascota_adoptada, raza_mascota_adoptada, edad_mascota_adoptada) VALUES (?, ?, ?, ?, ?, ?)",
      [id_usuario, id_mascota, nombre, especie, raza, edad]
    );

    // Eliminar la mascota de la tabla mascotas
    await pool.query("DELETE FROM mascotas WHERE id_mascota = ?", [id_mascota]);

    res.status(200).json({ message: "Mascota adoptada con éxito" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
