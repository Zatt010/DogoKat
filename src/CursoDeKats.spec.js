import { obtenerNombres, detallesCurso } from "./CuroDeKats.js";

describe("Creacion de Curso de Kata", () => {
    it("Obtener Posicion del nuevo curso", () => {
      const nombreCurso = "IngeSof";
      const detalleCurso = "Detalles del nuevo curso";
      const resultado = crearCurso(nombreCurso, detalleCurso);
      expect(resultado).toBe(true);
    });
    
});
  