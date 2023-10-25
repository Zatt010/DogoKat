class Kata{
  constructor(nombre, detalle, categoria, dificultad){
    this.nombre = nombre;
    this.detalle = detalle;
    this.categoria = categoria;
    this.dificultad = dificultad;
  }
}
let katas = [ 
new Kata("KataBankOCR", "Detalles de la primera kata","Orientado a las matematias","Principiante"),
new Kata("KataFizzBuzz", "Detalles de la segunda kata","Modelado de juego","Principiante"),
new Kata("FooBarQix", "Detalles de la tercera kata","Tecnologias especificas","Intermedio"),
new Kata("KataPotter", "Detalles de la cuarta kata","Algoritmo","Avanzado")
]
function obtenerNombres() {
  return katas[kataIndex].detalle;
}

function crearKata(nombreKata, detalleKata, categoriaKata, dificultadKata) {
  if (nombreKata.length <= 100 ) {
    katas.push(new Kata(nombreKata, detalleKata, categoriaKata, dificultadKata));
     return true
  } else {
    return false; 
  }
}
export { obtenerNombres, detallesKata, crearKata, crearKata, categoriaKata, dificultadKata };
