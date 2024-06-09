import {pool} from '../db.js';

export const getUserStuff = async (req, res) => {
 let { id } = req.params

 const [adoptions] = await pool.query(`SELECT * FROM adopciones where id_usuario =${id}`)

 const [reports] = await pool.query(`SELECT * FROM reporte_denuncia where id_usuario =${id}`)

 const [losts] = await pool.query(`SELECT * FROM reporte_perdida where id_usuario = ${id}`)

 return res.json({adoptions, reports, losts})
}

export const getTest = async (req, res) => {
 console.log("wep")
 console.log(req)
 return res.json({asdf:"asdf"})
}
