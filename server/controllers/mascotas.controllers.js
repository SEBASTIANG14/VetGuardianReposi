import {pool} from '../db.js';

export const getMascotas = (req, res) => {
    res.send('obteniendo mascotas')
}

export const getMascota = (req, res) => {
    res.send('obteniendo mascota')
}

export const createMascotas = (req, res) => {
    const {nombre, edad} = req.body
    pool.query('')
    res.send('creando mascota')
}

export const updateMascota = (req, res) => {
    res.send('actualizando mascota')
}

 export const deleteMascota = (req, res) => {
    res.send('eliminando mascota')
}