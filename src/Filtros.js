import { obtenerNombres, detallesKata, dificultadKata, categoriaKata } from './Kata.js';

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
  const katasPorCategorias = {};
  const nombres = obtenerNombres();
  
  nombres.forEach((nombre, index) => {
    const categoria = categoriaKata(index);
    const categoriaFormateada = categoria.replace(/\s+/g, '').toLowerCase();
    if (katasPorCategorias[categoriaFormateada]) {
      katasPorCategorias[categoriaFormateada].push({ nombre, index });
    } else {
      katasPorCategorias[categoriaFormateada] = [{ nombre, index }];
    }
  });

  return katasPorCategorias;
}



export { agruparKatasPorDificultad, agruparKatasPorCategoria };

