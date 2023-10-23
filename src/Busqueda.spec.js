import { busquedaSimple } from "./Busqueda.js";

describe("Busqueda de Kata por nombre", () => {
    it("Buscar Kata por nombre", () => {
        const result = busquedaSimple("kata");
        expect(result).toEqual(expect.arrayContaining(["KataBankOCR", "KataFizzBuzz"]));
    });

    it("Busqueda inexistente", () => {
        const result = busquedaSimple("ines");
        expect(result).toEqual([]);
    });
});
