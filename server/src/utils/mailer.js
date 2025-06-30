import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arthuropipa@gmail.com', // Cambia por tu correo real
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendContactMail = async ({ nombre, email, mensaje }) => {
  await transporter.sendMail({
    from: `"LuxeStays Contacto" <arthuropipa@gmail.com>`,
    to: 'arthuropipa@gmail.com', // Cambia por tu correo receptor
    subject: 'Nuevo mensaje de contacto',
    html: `
      <h3>Formulario de contacto recibido</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong><br/>${mensaje}</p>
    `
  });
};
