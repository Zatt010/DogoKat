import { busquedaSimple } from "./Busqueda.js";

describe("Busqueda de Kata por nombre", () => {
    it("Verificacion menos de 100 caracteres", () => {
        expect(busquedaSimple("kataa")).toEqual(true);
    });
});
