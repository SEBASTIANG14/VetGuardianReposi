import {createPool} from 'mysql2/promise';

export const pool = new createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '', 
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



