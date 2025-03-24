import {pool} from '../db.js';

export const getUserStuff = async (req, res) => {
 let { id } = req.params

 const [adoptions] = await pool.query(`SELECT * FROM adopciones where id_usuario =${id}`)

 const [reports] = await pool.query(`SELECT * FROM reporte_denuncia where id_usuario =${id}`)

 const [losts] = await pool.query(`SELECT * FROM reporte_perdida where id_usuario = ${id}`)

  adoptions.forEach(pet => {
   if (pet.imagen) {
    pet.imagen = pet.imagen.toString('base64')
   }
  });

 return res.json({adoptions, reports, losts})
}

export const getUserProfile= async (req, res) => {
 let { id } = req.params

 const [profile] = await pool.query(`SELECT * FROM usuario where id_usuario = ${id}`)

 return res.json({profile})
}

export const getTest = async (req, res) => {
 console.log("wep")
 console.log(req) 
 return res.json({asdf:"asdf"})
}
