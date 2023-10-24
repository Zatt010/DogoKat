class Kata{
  constructor(nombre, detalle, dificultad){
    this.nombre = nombre;
    this.detalle = detalle;
    this.dificultad = dificultad;
  }
}

let Katas = [
  new Kata("KataBankOCR", "Detalles de la primera kata","Principiante"),
  new Kata("KataFizzBuzz", "Detalles de la segunda kata","Principiante"),
  new Kata("FooBarQix", "Detalles de la tercera kata","Intermedio"),
  new Kata("KataPotter", "Detalles de la cuarta kata","Avanzado")
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

function crearKata(nombreKata, detalleKata, dificultadKata) {
  if (nombreKata.length <= 100) {
    Katas.push(new Kata(nombreKata, detalleKata, dificultadKata));
    return true
  } else {
    return false;
  }
}
export { obtenerNombres, detallesKata, crearKata, dificultadKata };
