import{ obtenerNombres, detallesCurso, crearCurso } from "./Curso.js";

describe("Creacion de Curso", () => {
    it("Obtener Posicion de la nueva Curso", () => {
      const nombreCurso = "IngeSofw";
      const detalleCurso = "Nuevo curso del semestre";
      const resultado = crearCurso(nombreCurso, detalleCurso);
      expect(resultado).toBe(true);
    });
  
});
  