import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import contactRoutes from './routes/contacto.routes.js';

const app = express();

// Configuración de CORS (ajusta el origin si tu frontend cambia de puerto/dominio)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use('/api', contactRoutes);

export default app;
