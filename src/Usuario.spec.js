import { Usuario } from "./Usuario.js";

describe('Recuperacion de parametros', () => {
        it('recuperacion de email y contrasena', () => {
                const email = 'prueba@gmail.com';
                const con = '123';
                const usuario = new Usuario(email,con);
                expect(usuario.detalle).toBe(`${email}: ${con}`);
        });
});