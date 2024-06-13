import { pool } from "../db.js";

export const adoptarMascota = async (req, res) => {
 const { id_usuario, id_mascota } = req.body;

 try {
  const [mascota] = await pool.query("SELECT * FROM mascotas WHERE id_mascota = ?", [id_mascota]);

  if (mascota.length === 0) {
   return res.status(404).json({ message: "Mascota no encontrada" });
  }

  const {
   nombre,
   edad,
   especie,
   raza,
   imagen
  } = mascota[0];

  await pool.query(
   "INSERT INTO adopciones (id_usuario, id_mascota, nombre_mascota_adoptada, especie_mascota_adoptada, raza_mascota_adoptada, edad_mascota_adoptada, imagen) VALUES (?, ?, ?, ?, ?, ?, ?)",
   [id_usuario, id_mascota, nombre, especie, raza, edad, imagen]
  );

  try {
   await pool.query("UPDATE mascotas SET is_adopted = true WHERE id_mascota = ?", id_mascota);
  } catch (error) {
   return res.status(500).json({ message: error.message });
  }

  res.status(200).json({ message: "Mascota adoptada con éxito" });
 } catch (error) {
  return res.status(500).json({ message: error.message });
 }
};
