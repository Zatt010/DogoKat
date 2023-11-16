import { obtenerNombres, detallesKata, crearKata, dificultadKata, categoriaKata } from "./Kata.js";

describe("Obtener Lista de Kata", () => {
  it("Obtener multiples nombres desde el js", async () => {
    const nombres = await obtenerNombres();
    expect(nombres).toEqual(["KataBankOCR","KataFizzBuzz","FooBarQix","KataPotter"]);
  });
});


describe("Obtener Detalles de Kata", () => {
  it("Obtener detalle de primera Kata", async () => {
    const detalle = await detallesKata(1);
    expect(detalle).toEqual("Detalles de la primera kata");
  });
  it("Obtener detalle de la cuarta Kata", async () => {
    const detalle = await detallesKata(4);
    expect(detalle).toEqual("Detalles de la cuarta kata");
  });
});


describe("Creacion de Kata", () => {
  it("Obtener Posicion de la nueva Kata", () => {
    const nombreKata = "Kata Try";
    const detalleKata = "Detalles de la nueva kata de prueba";
    const resultado = crearKata(nombreKata, detalleKata);
    expect(resultado).toBe(true);
  });
  it("crear una kata erronea", () => {
    const nombreKata = "Kata Tryhardx2yx3";
    const detalleKata = "Detalles de la nueva kata de prueba";
    const resultado = crearKata(nombreKata, detalleKata);
    expect(resultado).toBe(false);
  });
});


describe("Obtener Dificultad de Kata", () => {
  it("Obtener dificultad de primera Kata", async () => {
    const dificultad = await dificultadKata(1);
    expect(dificultad).toEqual("Principiante");
  });
  it("Obtener dificultad de la cuarta Kata", async () => {
    const dificultad = await dificultadKata(4);
    expect(dificultad).toEqual("Avanzado");
  });
});

describe("Obtener Categoria de Kata", () => {
  it("Obtener categoria de primera Kata", () => {
    expect(categoriaKata(1)).toEqual("Matematicas");
  });
  it("Obtener categoria de tercera kata", () => {
    expect(categoriaKata(3)).toEqual("Algoritmos");
  });
  it("Obtener categoria categoria nro 2", () => {
    expect(categoriaKata(1)).toEqual("Juegos");
  });

});