import {createPool} from 'mysql2/promise';

export const pool = new createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'Cabem0co', 
    database: 'VetGuardiansDB'
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión exitosa a la base de datos.');
        connection.release();
    } catch (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        console.error('Código de error:', err.code);
    }
}

testConnection();


