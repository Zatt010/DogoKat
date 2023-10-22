const nombres = ["KataBankOCR", "KataFizzBuzz", "FooBarQix", "KataPotter"];
const detallesKatas = ["Detalles de la primera kata", "Detalles de la segunda kata", "Detalles de la tercera kata", "Detalles de la cuarta kata"];

function obtenerNombres() {
  return nombres;
}

function detallesKata(kataIndex) {
  return detallesKatas[kataIndex];
}

export { obtenerNombres, detallesKata };
