import express from 'express';
import {PORT} from './config.js';
import indexRoutes from './routes/index.routes.js';
import mascotasRoutes from './routes/mascotas.routes.js';

const app = express();

app.use(express.json())
app.use(indexRoutes)
app.use(mascotasRoutes)
app.listen(PORT)
console.log(`Server is listening on port ${PORT}`);