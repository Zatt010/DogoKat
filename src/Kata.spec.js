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
  it("Obtener categoria de primera Kata", async () => {
    const categoria = await categoriaKata(1);
    expect(categoria).toEqual("Matematicas");
  });
  it("Obtener categoria de tercera kata", async () => {
    const categoria = await categoriaKata(3);
    expect(categoria).toEqual("Tecnologia");
  });
  it("Obtener categoria categoria nro 2", async () => {
    const categoria = await categoriaKata(2);
    expect(categoria).toEqual("Juegos");
  });

});