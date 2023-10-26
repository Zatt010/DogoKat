import { agruparKatasPorDificultad, agruparKatasPorCategoria,agruparKatasPorLenguaje } from "./Filtros.js";

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
          Matematicas: [
            { nombre: "KataBankOCR", index: 0 },
           
          ],
          Juegos: [
            { nombre: "KataFizzBuzz", index: 1 }
          ],
          Tecnologia: [
            { nombre: "FooBarQix", index: 2 }
          ],
          Algoritmos: [
            { nombre: "KataPotter", index: 3 }
          ],
        });
  });
  it("Verificar existencia de las 1ra categoria", () => {
    const result = agruparKatasPorCategoria();
    expect(result).toHaveProperty("Matematicas");
    
  });
  it("Verificar existencia de las 2da categoria", () => {
    const result = agruparKatasPorCategoria();
    expect(result).toHaveProperty("Juegos");
    
  });
  it("Verificar existencia el lenguaje c++", () => {
    const result = agruparKatasPorLenguaje();
    expect(result).toHaveProperty("c++");
    
  });
  it("Verificar existencia el lenguaje javascript", () => {
    const result = agruparKatasPorLenguaje();
    expect(result).toHaveProperty("javascript");
    
  });
  it("Verificar existencia el lenguaje phyton", () => {
    const result = agruparKatasPorLenguaje();
    expect(result).toHaveProperty("phyton");
    
  });
  it("Verificar que no existencia el lenguaje java", () => {
    const result = agruparKatasPorLenguaje();
    expect(result).not.toHaveProperty("java");
    
  });
  it("Verificar que existencia estos lenguaje phyton c++", () => {
    const result = agruparKatasPorLenguaje();
    expect(result).not.toHaveProperty("phyton","c++");
    
  });
  
});
