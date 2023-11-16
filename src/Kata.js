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
  return fetch("http://localhost:3000/Katas")
    .then(response => response.json())
    .then(data => {
      const nombres = data.map(kata => kata.nombre);
      return nombres;
    })
    .catch(error => {
      console.error("Error al cargar las canciones:", error);
      return [];
    });
}

function detallesKata(kataIndex) {
  return fetch(`http://localhost:3000/Katas/${kataIndex}`)
    .then(response => response.json())
    .then(data => {
      const detalle = data.detalle;
      return detalle;
    })
    .catch(error => {
      console.error("Error al el detalle:", error);
      return [];
    });
}


function dificultadKata(kataIndex) {
  return Katas[kataIndex].dificultad;
}
function categoriaKata(kataIndex) {
  return Katas[kataIndex].categoria;
}

function lenguajekata(kataIndex) {
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

export { obtenerNombres, detallesKata, crearKata, dificultadKata, categoriaKata,lenguajekata };
