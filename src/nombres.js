const nombres = ["KataBankOCR", "KataFizzBuzz", "FooBarQix", "KataPotter"];
const detallesKatas = ["Detalles de la primera kata"];

function obtenerNombres() {
  return nombres;
}

function detallesKata(kataIndex) {
  return detallesKatas[kataIndex];
}

export { obtenerNombres, detallesKata };
