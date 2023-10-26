import { usuarioPredeterminado } from "./Usuario.js";

describe('Recuperacion de parametros', () => {
        it('recuperacion de el detalle del usuario predeterminado', () => {
                expect(usuarioPredeterminado.detalle).toBe('prueba@gmail.com: 123');
        });
});