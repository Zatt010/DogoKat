class Kata{
  constructor(nombre, detalle, dificultad, categoria,lenguaje){
    this.nombre = nombre;
    this.detalle = detalle;
    this.dificultad = dificultad;
    this.categoria = categoria;
    this.lenguaje = lenguaje;
  }
}

let Katas = [
  new Kata("KataBankOCR", "Detalles de la primera kata","Principiante","Matematicas","c++"),
  new Kata("KataFizzBuzz", "Detalles de la segunda kata","Principiante","Juegos","javascript"),
  new Kata("FooBarQix", "Detalles de la tercera kata","Intermedio","Tecnologia","phyton"),
  new Kata("KataPotter", "Detalles de la cuarta kata","Avanzado","Algoritmos","c++")
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
function lenguajekata(kataIndex){
  return Katas[kataIndex].lenguaje;
}
function crearKata(nombreKata, detalleKata, dificultadKata, categoriaKata,lenguajekata) {
  if (nombreKata.length <= 13) {
    Katas.push(new Kata(nombreKata, detalleKata, dificultadKata, categoriaKata,lenguajekata));
    return true
  } else {
    return false;
  }
}

function modificarKata(index, nuevoNombre, nuevoDetalle,nuevaDificultad) {
  Katas[index].nombre = nuevoNombre;
  Katas[index].detalle = nuevoDetalle;
  Katas[index].dificultad = nuevaDificultad;
  return true;
}

export { obtenerNombres, detallesKata, crearKata, dificultadKata, categoriaKata,lenguajekata,modificarKata };
