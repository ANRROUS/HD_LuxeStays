import { z } from 'zod';

export const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre es obligatorio'),
  email: z.string().email('Email inválido'),
  mensaje: z.string().min(5, 'El mensaje es obligatorio'),
});
