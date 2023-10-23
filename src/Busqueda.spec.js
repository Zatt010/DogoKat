import { busquedaSimple } from "./Busqueda.js";

describe("Busqueda de Kata por nombre", () => {
    it("Recuperar los nombres desde Kata.js", () => {
        expect(busquedaSimple("kataa")).toEqual(["KataBankOCR","KataFizzBuzz","FooBarQix","KataPotter"]);
    });
});
