class Kata{
  constructor(nombre, detalle){
    this.nombre = nombre;
    this.detalle = detalle;
  }
}
let Katas = [
  new Kata("KataBankOCR", "Detalles de la primera kata"),
  new Kata("KataFizzBuzz", "Detalles de la segunda kata"),
  new Kata("FooBarQix", "Detalles de la tercera kata"),
  new Kata("KataPotter", "Detalles de la cuarta kata")
]

function obtenerNombres() {
  return Katas.map(Kata => Kata.nombre);
}

function detallesKata(kataIndex) {
  return Katas[kataIndex].detalle;
}

function crearKata(nombreKata, detalleKata) {
  if (nombreKata.length <= 100) {
    Katas.push(new Kata(nombreKata, detalleKata));
    return true
  } else {
    return false;
  }
}
export { obtenerNombres, detallesKata,crearKata };
