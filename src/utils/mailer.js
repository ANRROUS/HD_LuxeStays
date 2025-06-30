import nodemailer from 'nodemailer';

export const sendContactMail = async ({ nombre, email, mensaje }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'arthuropipa@gmail.com',
            pass: 'AQUI_COLOCAR_TU_CONTRASEÑA_DE_APP'
            // Asegúrate de usar una contraseña de aplicación si tienes habilitada la verificación en dos pasos
        }
    });

    await transporter.sendMail({
        from: `"LuxeStays Contacto" <arthuropipa@gmail.com>`,
        to: 'arthuropipa@gmail.com',
        subject: 'Nuevo mensaje de contacto LuxeStays',
        html: `
      <h3>Nuevo mensaje de LandingPage</h3>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong><br/>${mensaje}</p>
    `
    });
};