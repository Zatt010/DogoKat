import { agruparKatasPorDificultad, agruparKatasPorCategoria  } from "./Filtros.js";

describe("Agrupacion de Kata por dificultad", () => {
    it("Agrupar Kata por dificultad", () => {
        const result = agruparKatasPorDificultad();
        expect(result).toEqual({
            Principiante: [
              { nombre: "KataBankOCR", index: 0 },
              { nombre: "KataFizzBuzz", index: 1 }
            ],
            Intermedio: [
              { nombre: "FooBarQix", index: 2 }
            ],
            Avanzado: [
              { nombre: "KataPotter", index: 3 }
            ]
          });
    });
    it("Verificar existencia de las dificultades", () => {
        const result = agruparKatasPorDificultad();
        expect(result).toHaveProperty("Principiante");
        expect(result).toHaveProperty("Intermedio");
        expect(result).toHaveProperty("Avanzado");
      });
});
describe("Agrupacion de Kata por categoria", () => {
  it("Agrupar Kata por categoria", () => {
    const result = agruparKatasPorCategoria();
    expect(result).toEqual({
      matematicas: [
        { nombre: "KataBankOCR", index: 0 },
      ],
      juego: [
        { nombre: "KataFizzBuzz", index: 1 },
      ],
      tecnologias: [
        { nombre: "FooBarQix", index: 2 },
      ],
      algoritmo: [
        { nombre: "KataPotter", index: 3 },
      ]
     
    });
  });

  it("Verificar existencia categorias 1", () => {
    const result = agruparKatasPorDificultad();
    expect(result).toHaveProperty("matematicas");
   
  });
});
