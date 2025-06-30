import { describe, it, expect } from 'vitest';
import { contactSchema } from '../src/validators/contact.validator.js';

describe('Contact form validation', () => {
    it('should validate a correct payload', () => {
        const data = { nombre: 'Juan', email: 'juan@mail.com', mensaje: 'Hola!' };
        const result = contactSchema.safeParse(data);
        expect(result.success).toBe(true);
    });

    it('should fail with invalid email', () => {
        const data = { nombre: 'Juan', email: 'no-es-email', mensaje: 'Hola!' };
        const result = contactSchema.safeParse(data);
        expect(result.success).toBe(false);
    });

    it('should fail with empty fields', () => {
        const data = { nombre: '', email: '', mensaje: '' };
        const result = contactSchema.safeParse(data);
        expect(result.success).toBe(false);
    });
});
