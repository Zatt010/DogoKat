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

// Funcion para realizar la llamada a la API
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

// Obtener nombres de las Katas
async function obtenerNombres() {
  const data = await fetchData("http://localhost:3000/Katas");
  return data ? data.map(kata => kata.nombre) : [];
}

// Obtener detalle de una Kata
async function detallesKata(kataIndex) {
  const data = await fetchData(`http://localhost:3000/Katas/${kataIndex}`);
  return data ? data.detalle : null;
}

// Obtener dificultad de una Kata
async function dificultadKata(kataIndex) {
  const data = await fetchData(`http://localhost:3000/Katas/${kataIndex}`);
  return data ? data.dificultad : null;
}

// Obtener categoría de una Kata
async function categoriaKata(kataIndex) {
  const data = await fetchData(`http://localhost:3000/Katas/${kataIndex}`);
  return data ? data.categoria : null;
}

// Obtener lenguaje de una Kata
async function lenguajekata(kataIndex) {
  const data = await fetchData(`http://localhost:3000/Katas/${kataIndex}`);
  return data ? data.lenguaje : null;
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
