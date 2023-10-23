let nombres = ["KataBankOCR", "KataFizzBuzz", "FooBarQix", "KataPotter"];
let detallesKatas = 
["Detalles de la primera kata", "Detalles de la segunda kata", "Detalles de la tercera kata", "Detalles de la cuarta kata"];

function obtenerNombres() {
  return nombres;
}

function detallesKata(kataIndex) {
  return detallesKatas[kataIndex];
}

function crearKata(nombreKata, detalleKata) {
  if (nombreKata.length <= 100) {
    nombres.push(nombreKata);
    detallesKatas.push(detalleKata);
    return true
  } else {
    return false;
  }
}
export { obtenerNombres, detallesKata,crearKata };
