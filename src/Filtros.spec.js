import { agruparKatasPorDificultad, agruparKatasPorCategoria,agruparKatasPorLenguaje } from "./Filtros.js";

describe("Agrupacion de Kata por dificultad", () => {
  it("Agrupar Kata por dificultad", async () => {
    const result = await agruparKatasPorDificultad();
    expect(result).toEqual({
      Principiante: ["KataBankOCR", "KataFizzBuzz"],
      Intermedio: ["FooBarQix"],
      Avanzado: ["KataPotter"],
    });
  });

  it("Verificar existencia de las dificultades", async () => {
    const result = await agruparKatasPorDificultad();
    expect(result).toHaveProperty("Principiante");
    expect(result).toHaveProperty("Intermedio");
    expect(result).toHaveProperty("Avanzado");
  });
});

describe("Agrupacion de Kata por categoria", () => {
  it("Agrupar Kata por categoria", async () => {
    const result = await agruparKatasPorCategoria();
    expect(result).toEqual({
      Matematicas: ["KataBankOCR"],
      Juegos: ["KataFizzBuzz"],
      Tecnologia: ["FooBarQix"],
      Algoritmos: ["KataPotter"],
    });
  });
  it("Verificar existencia de las categorías", async () => {
    const result = await agruparKatasPorCategoria();
    expect(result).toHaveProperty("Matematicas");
    expect(result).toHaveProperty("Juegos");
    expect(result).toHaveProperty("Tecnologia");
    expect(result).toHaveProperty("Algoritmos");
  });
});

describe("Agrupacion de Kata por lenguaje", () => {
  it("Agrupar Kata por lenguaje", async () => {
    const result = await agruparKatasPorLenguaje();
    expect(result).toEqual({
      "c++": ["KataBankOCR", "KataPotter"],
      javascript: ["KataFizzBuzz"],
      phyton: ["FooBarQix"],
    });
  });

  it("Verificar existencia de los lenguajes", async () => {
    const result = await agruparKatasPorLenguaje();
    expect(result).toHaveProperty("c++");
    expect(result).toHaveProperty("javascript");
    expect(result).toHaveProperty("phyton");
  });

  it("Verificar no existencia del lenguaje java", async () => {
    const result = await agruparKatasPorLenguaje();
    expect(result).not.toHaveProperty("java");
  });
});
