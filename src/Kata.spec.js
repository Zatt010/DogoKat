import { obtenerNombres, detallesKata,crearKata } from "./Kata.js";


describe("Obtener Lista de Kata", () => {
  it("Obtener multiples nombres desde el js", () => {
    expect(obtenerNombres()).toEqual(["KataBankOCR","KataFizzBuzz","FooBarQix","KataPotter"]);
  });
});

describe("Obtener Detalles de Kata", () => {
  it("Obtener detalle de primera Kata", () => {
    expect(detallesKata(0)).toEqual("Detalles de la primera kata");
  });
  it("Obtener detalle de la cuarta Kata", () => {
    expect(detallesKata(3)).toEqual("Detalles de la cuarta kata");
  });
});

describe("Creacion de Kata", () => {
  it("Verificacion, nombre < 100 caracteres formato VALIDO", () => {
    const resultado = crearKata("Katatry");
    expect(resultado).toBe(true);
  });
  it("Verificacion, nombre > 100 caracteres formato INVALIDO", () => {
    const resultado = crearKata("Nombre de kata con más de 100 caracteres, como un ejemplo largo y repetitivo".repeat(3));
    expect(resultado).toBe(false);
  });
});