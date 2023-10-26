import { busquedaSimple, busquedaEstado } from "./Busqueda.js";

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

describe("Busqueda de estado", () => {
    it("Buscar existente", () => {
        const result = busquedaEstado("No");
        expect(result).toEqual(expect.arrayContaining(["No Terminado"]));
    });

});