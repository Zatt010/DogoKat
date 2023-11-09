import { obtenerNombres, dificultadKata,categoriaKata,lenguajekata } from './Kata.js';

function agruparKatasPorCriterio(obtenerValor) {
  const nombres = obtenerNombres();

  return nombres.reduce((katasAgrupadas, nombre, index) => {
    const valor = obtenerValor(index);
    katasAgrupadas[valor] = katasAgrupadas[valor] || [];
    katasAgrupadas[valor].push({ nombre, index });
    return katasAgrupadas;
  }, {});
}

function agruparKatasPorDificultad() {
  return agruparKatasPorCriterio((index) => dificultadKata(index));
}

function agruparKatasPorCategoria() {
  return agruparKatasPorCriterio((index) => categoriaKata(index));
}

function agruparKatasPorLenguaje() {
  return agruparKatasPorCriterio((index) => lenguajekata(index));
}

export { agruparKatasPorDificultad, agruparKatasPorCategoria, agruparKatasPorLenguaje };