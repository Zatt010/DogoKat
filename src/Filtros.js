import { obtenerNombres, detallesKata, dificultadKata,categoriaKata,lenguajekata,EstadoKata } from './Kata.js';

function agruparKatasPorDificultad() {
  const nombres = obtenerNombres();
  const katasPorDificultad = {};

  nombres.forEach((nombre, index) => {
    const dificultad = dificultadKata(index);
    if (!katasPorDificultad[dificultad]) {
      katasPorDificultad[dificultad] = [];
    }
    katasPorDificultad[dificultad].push({ nombre, index });
  });

  return katasPorDificultad;
}

function agruparKatasPorCategoria() {
  const nombres = obtenerNombres();
  return nombres.reduce((KatasPorCategoria, nombre, index) => {
    const categoria = categoriaKata(index);
    KatasPorCategoria[categoria] = KatasPorCategoria[categoria] || [];
    KatasPorCategoria[categoria].push({ nombre, index });
    return KatasPorCategoria;
  }, {});
}
function agruparKatasPorLenguaje() {
  const nombres = obtenerNombres();
  return nombres.reduce((KatasPorLenguaje, nombre, index) => {
    const lenguaje = lenguajekata(index); // Obtener el lenguaje de la kata actual
    KatasPorLenguaje[lenguaje] = KatasPorLenguaje[lenguaje] || [];
    KatasPorLenguaje[lenguaje].push({ nombre, index });
    return KatasPorLenguaje;
  }, {});
}
function busquedaEstado() {
  const nombres = obtenerNombres();
  return nombres.reduce((katasporestado, nombre, index) => {
    const estado = EstadoKata(index); // Obtener el estado de la kata actual
    katasporestado[estado] = katasporestado[estado] || [];
    katasporestado[estado].push({ nombre });
    return katasporestado;
  }, {});
}

export { agruparKatasPorDificultad,agruparKatasPorCategoria,agruparKatasPorLenguaje,busquedaEstado };

