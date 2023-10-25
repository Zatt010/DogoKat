import { obtenerNombres, detallesKata, dificultadKata } from './Kata.js';

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

export { agruparKatasPorDificultad };