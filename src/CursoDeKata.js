class Curso{
    constructor(nombre, detalle){
      this.nombre = nombre;
      this.detalle = detalle;
      
    }
}

let Katas = [
    new Curso("IngeSof", "Detalles del nuevo curso")

  ]
  
  function obtenerNombres() {
    return Curso.map(Curso => Curso.nombre);
  }
  
  function detallesCurso(CursoIndex) {
    return Curso[CursoIndex].detalle;
  }
  export { obtenerNombres, detallesCurso };
