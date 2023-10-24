import { obtenerNombres, detallesKata, crearKata, dificultadKata } from "./Kata.js";


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
  it("Obtener Posicion de la nueva Kata", () => {
    const nombreKata = "Kata Try";
    const detalleKata = "Detalles de la nueva kata de prueba";
    const resultado = crearKata(nombreKata, detalleKata);
    expect(resultado).toBe(true);
  });
});

describe("Obtener Dificultad de Kata", () => {
  it("Obtener dificultad de primera Kata", () => {
    expect(dificultadKata(0)).toEqual("Principiante");
  });/*
  it("Obtener detalle de la cuarta Kata", () => {
    expect(detallesKata(3)).toEqual("Detalles de la cuarta kata");
  });*/
});