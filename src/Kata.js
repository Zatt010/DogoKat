class Kata {
  constructor(nombre, detalle, categoria, dificultad) {
    this.nombre = nombre;
    this.detalle = detalle;
    this.categoria = categoria;
    this.dificultad = dificultad;
  }
}

let Katas = [ 
  new Kata("KataBankOCR", "Detalles de la primera kata", "Matematicas", "Principiante"),
  new Kata("KataFizzBuzz", "Detalles de la segunda kata", "Juego", "Principiante"),
  new Kata("FooBarQix", "Detalles de la tercera kata", "Tecnologias", "Intermedio"),
  new Kata("KataPotter", "Detalles de la cuarta kata", "Algoritmo", "Avanzado")
];

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

function crearKata(nombreKata, detalleKata, categoriaKata, dificultadKata) {
  if (nombreKata.length <= 100) {
    Katas.push(new Kata(nombreKata, detalleKata, categoriaKata, dificultadKata));
    return true;
  } else {
    return false; 
  }
}

export { obtenerNombres, detallesKata, crearKata, categoriaKata, dificultadKata };
