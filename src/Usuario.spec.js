import { Usuarios } from "./Usuario.js";

describe('Recuperacion de parametros', () => {
        it('recuperacion de el detalle del usuario predeterminado', () => {
                const detalleUsuario = Usuarios[0].detalle;
                expect(detalleUsuario).toBe('prueba@gmail.com: 123');
        });
});