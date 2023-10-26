import { obtenerNombres, detallesKata, dificultadKata,categoriaKata } from './Kata.js';

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



export { agruparKatasPorDificultad,agruparKatasPorCategoria };

