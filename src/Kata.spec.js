import { obtenerNombres, detallesKata, crearKata, dificultadKata, categoriaKata,modificarKata } from "./Kata.js";


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
  it("crear una kata erronea", () => {
    const nombreKata = "Kata Tryhardx2yx3";
    const detalleKata = "Detalles de la nueva kata de prueba";
    const resultado = crearKata(nombreKata, detalleKata);
    expect(resultado).toBe(false);
  });
});


describe("Obtener Dificultad de Kata", () => {
  it("Obtener dificultad de primera Kata", () => {
    expect(dificultadKata(0)).toEqual("Principiante");
  });
  it("Obtener dificultad de la cuarta Kata", () => {
    expect(dificultadKata(3)).toEqual("Avanzado");
  });
});

describe("Obtener Categoria de Kata", () => {
  it("Obtener categoria de primera Kata", () => {
    expect(categoriaKata(0)).toEqual("Matematicas");
  });
  it("Obtener categoria de tercera kata", () => {
    expect(categoriaKata(3)).toEqual("Algoritmos");
  });
  it("Obtener categoria categoria nro 2", () => {
    expect(categoriaKata(1)).toEqual("Juegos");
  });
});

describe("Modificar Kata", () => {
  it("Modificar los detalles y verificar el cambio de atributo", () => {
    const indexAModificar = 0;
    const exitoModificacion = modificarKata(indexAModificar, "NuevoNombre", "Detalle cambiado","Avanzado","Juegos","phyton");
    expect(exitoModificacion).toBe(true);
    const kata = obtenerNombres();
    expect(kata[indexAModificar]).toBe("NuevoNombre");
  });
  it('Modificar Kata inexistente', () => {
    const indexFueraDeLimites = 10;
    const exitoModificacion = modificarKata(indexFueraDeLimites, "NuevoNombre", "Detalle cambiado","Avanzado","Juegos","phyton");
    expect(exitoModificacion).toBe(false);
  });
});