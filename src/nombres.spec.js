import { obtenerNombres, detallesKata } from "./nombres.js";


describe("Obtener Lista de Kata", () => {
  it("Obtener multiples nombres desde el js", () => {
    expect(obtenerNombres()).toEqual(["KataBankOCR","KataFizzBuzz","FooBarQix","KataPotter"]);
  });
});

describe("Obtener Detalles de Kata", () => {
  it("Obtener detalle de primera Kata", () => {
    expect(detallesKata(0)).toEqual("Detalles de la primera kata");
  });
});
