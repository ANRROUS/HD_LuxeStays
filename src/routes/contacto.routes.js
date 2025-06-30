import { Router } from 'express';
import { crearContacto } from '../controllers/contacto.controllers.js';

const router = Router();

router.post('/contact', crearContacto);

export default router;
