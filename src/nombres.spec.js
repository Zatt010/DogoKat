import obtenerNombres from "./nombres.js";

describe("Obtener Lista de Kata", () => {
  it("Obtener el nombre desde el js", () => {
    expect(obtenerNombres()).toEqual("KataBankOCR");
  });
});