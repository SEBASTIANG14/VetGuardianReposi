import express from 'express';
import {PORT} from './config.js';
import cors from 'cors'
import indexRoutes from './routes/index.routes.js';
import mascotasRoutes from './routes/mascotas.routes.js';
import usersRoutes from './routes/users.routes.js';
import login from './routes/login.routes.js'

const app = express();

app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use(mascotasRoutes)
app.use(usersRoutes)
app.use(login)
app.listen(PORT)
console.log(`Server is listening on port ${PORT}`); 