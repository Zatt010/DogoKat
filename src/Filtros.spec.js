import { agruparKatasPorDificultad } from "./Filtros.js";

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
