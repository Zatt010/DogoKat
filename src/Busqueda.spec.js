import { busquedaSimple } from "./Busqueda.js";

describe("Busqueda de Kata por nombre", () => {
    it("Buscar Kata por nombre", async () => {
        const result = await busquedaSimple("kata");
        expect(result).toEqual(expect.arrayContaining(["KataBankOCR", "KataFizzBuzz"]));
    });

    it("Busqueda inexistente", async () => {
        const result = await busquedaSimple("ines");
        expect(result).toEqual([]);
    });
});
