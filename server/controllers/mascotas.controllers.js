import { pool } from '../db.js';

export const getMascotas = async (req, res) => {
 try {
  const [result] = await pool.query("SELECT * FROM mascotas where is_adopted = 0")
  res.json(result)
 } catch (error) {
  return res.status(500).json({ message: error.message })
 }

}

export const getMascota = async (req, res) => {
 try {
  const [result] = await pool.query("SELECT * FROM mascotas WHERE id_mascota = ?", [req.params.id])
  res.json(result[0])
 } catch (error) {
  return res.status(500).json({ message: error.message })
 }
}

export const createMascotas = async (req, res) => {
 try {
  const { nombre, edad, especie, raza, peso, nombre_usuario, id_carnet_medico, foto_mascota } = req.body;

  console.log("Datos recibidos: ", req.body);

  // Verificación de que todos los campos están presentes y no son nulos o vacíos
  if (!nombre || !edad || !especie || !raza || !peso || !nombre_usuario || !id_carnet_medico || !foto_mascota) {
   console.log("Faltan campos obligatorios");
   return res.status(400).send('Faltan campos obligatorios');
  }

  try {
   const result = await pool.query(
    'INSERT INTO mascotas (nombre, edad, especie, raza, peso, nombre_usuario, id_carnet_medico, foto_mascota) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [nombre, edad, especie, raza, peso, nombre_usuario, id_carnet_medico, foto_mascota]
   );
   console.log(result);
   res.send('Mascota creada exitosamente');
  } catch (error) {
   console.error(error);
   res.status(500).send('Error al crear la mascota');
  }
 } catch (error) {
  return res.status(500).json({ message: error.message })
 }

}


export const updateMascota = (req, res) => {
 res.send('actualizando mascota')
}

export const deleteMascota = async (req, res) => {
 try {
  const [result] = await pool.query("DELETE FROM mascotas WHERE id_mascota = ?", [req.params.id])

  if (result.affectedRows === 0)
   return res.status(404).json({ message: "Mascota not found" })

  return res.sendStatus(204)
 } catch (error) {
  return res.send(500).json({ message: error.message })
 }
}
