import { Usuario } from "./Usuario.js";

describe('Recuperacion de parametros', () => {
        it('recuperacion de email', () => {
                const email = 'prueba@gmail.com';
                const usuario = new Usuario(email);
                expect(usuario.detalle).toBe(email);
        });
});