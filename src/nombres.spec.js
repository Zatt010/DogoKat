import obtenerNombres from "./nombres.js";

describe("Obtener Lista de Kata", () => {
  it("Obtener nombres desde el js", () => {
    expect(obtenerNombres()).toEqual(["KataBankOCR","KataFizzBuzz"]);
  });
});