import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  mensaje: { type: String, required: true },
  fechaEnvio: { type: Date, default: Date.now },
  leido: { type: Boolean, default: false }
});

export default mongoose.model('Contacto', contactSchema);
