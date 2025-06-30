import Contacto from '../models/contacto.model.js';
import { sendContactMail } from '../utils/mailer.js';

export const crearContacto = async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;

    const nuevoContacto = new Contacto({ nombre, email, mensaje });
    await nuevoContacto.save();

    await sendContactMail({ nombre, email, mensaje });

    res.status(201).json({ message: 'Mensaje enviado y almacenado correctamente.' });
  } catch (error) {
    console.error('Error en crearContacto:', error);
    res.status(500).json({ message: 'Error al enviar o almacenar el mensaje.', error });
  }
};
    