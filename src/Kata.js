const nombres = ["KataBankOCR", "KataFizzBuzz", "FooBarQix", "KataPotter"];
const detallesKatas = ["Detalles de la primera kata", "Detalles de la segunda kata", "Detalles de la tercera kata", "Detalles de la cuarta kata"];

function obtenerNombres() {
  return nombres;
}

function detallesKata(kataIndex) {
  return detallesKatas[kataIndex];
}

function crearKata(nombreKata) {
  if (nombreKata.length <= 100) {
    return true;
  } else {
    return false;
  }
}
export { obtenerNombres, detallesKata,crearKata };
