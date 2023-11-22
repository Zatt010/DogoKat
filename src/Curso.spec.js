import{crearCurso, obtenerNombres, detallesCurso } from "./Curso.js";

describe("Creacion de Curso", () => {
    it("Obtener Posicion de la nueva Curso", () => {
      const nombreCurso = "IngeSofw";
      const detalleCurso = "Nuevo curso del semestre";
      const resultado = crearCurso(nombreCurso, detalleCurso);
      expect(resultado).toBe(true);
    });
    
});
describe("Obtener Nombre de Curso Creado", () => {
    it("Obtener  nombre del curso creado del js", () => {
       expect(obtenerNombres(0)).toEqual("IngeSofw");
      
    });
    it("Obtener  nombre del curso 2 creado del js", () => {
      expect(obtenerNombres(1)).toEqual("PracInge");
     
   });
    
});

