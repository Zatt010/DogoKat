
class Curso{
    
  constructor(nombre, detalle){
    this.nombre = nombre;
    this.detalle = detalle;
    
  }
}

let Cursos = [
  new Curso("IngeSofw", "Nuevo curso del semestre"),
  new Curso("PracInge", "Nuevo curso del semestre")
]

function obtenerNombres(CursoIndex) {
    return Cursos[CursoIndex].nombre;
}
  
function detallesCurso(CursoIndex) {
    return Cursos[CursoIndex].detalle;
}

function crearCurso(nombreCurso, detalleCurso) {

    if (nombreCurso.length <= 20) {
      Cursos.push(new Curso(nombreCurso, detalleCurso));
      return true
    } else {
      return false;
    }
}

export {crearCurso, obtenerNombres,detallesCurso}