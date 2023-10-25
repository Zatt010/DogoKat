class Kata{
  constructor(nombre, detalle, dificultad, categoria){
    this.nombre = nombre;
    this.detalle = detalle;
    this.dificultad = dificultad;
    this.categoria = categoria;
  }
}

let Katas = [
  new Kata("KataBankOCR", "Detalles de la primera kata","Principiante","Matematicas"),
  new Kata("KataFizzBuzz", "Detalles de la segunda kata","Principiante","Juegos"),
  new Kata("FooBarQix", "Detalles de la tercera kata","Intermedio","Tecnologia"),
  new Kata("KataPotter", "Detalles de la cuarta kata","Avanzado","Algoritmos")
]

function obtenerNombres() {
  return Katas.map(Kata => Kata.nombre);
}

function detallesKata(kataIndex) {
  return Katas[kataIndex].detalle;
}

function dificultadKata(kataIndex) {
  return Katas[kataIndex].dificultad;
}
function categoriaKata(kataIndex) {
  return Katas[kataIndex].categoria;
}
function crearKata(nombreKata, detalleKata, dificultadKata, categoriaKata) {
  if (nombreKata.length <= 100) {
    Katas.push(new Kata(nombreKata, detalleKata, dificultadKata, categoriaKata));
    return true
  } else {
    return false;
  }
}
export { obtenerNombres, detallesKata, crearKata, dificultadKata, categoriaKata };
