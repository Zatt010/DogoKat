import { obtenerNombres, dificultadKata, categoriaKata, lenguajekata } from './Kata.js';

async function agruparKatasPorCriterio(obtenerValor) {
  const nombres = await obtenerNombres();
  const katasPromises = nombres.map(async (nombre, index) => {
    const valor = await obtenerValor(index + 1); // Ajuste del índice
    return { nombre, valor };
  });

  return Promise.all(katasPromises);
}

function agruparPorValor(katas) {
  return katas.reduce((katasAgrupadas, kata) => {
    const { valor, nombre } = kata;
    if (valor !== null) {
      katasAgrupadas[valor] = katasAgrupadas[valor] || [];
      katasAgrupadas[valor].push(nombre);
    }
    return katasAgrupadas;
  }, {});
}


async function agruparKatasPorDificultad() {
  const katas = await agruparKatasPorCriterio(async (index) => dificultadKata(index));
  return agruparPorValor(katas);
}

async function agruparKatasPorCategoria() {
  const katas = await agruparKatasPorCriterio(async (index) => categoriaKata(index));
  return agruparPorValor(katas);
}

async function agruparKatasPorLenguaje() {
  const katas = await agruparKatasPorCriterio(async (index) => lenguajekata(index));
  return agruparPorValor(katas);
}

export { agruparKatasPorDificultad, agruparKatasPorCategoria, agruparKatasPorLenguaje };
