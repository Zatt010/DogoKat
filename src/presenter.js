import { obtenerNombres, detallesKata, dificultadKata, lenguajekata } from './Kata.js';
import { busquedaSimple } from './Busqueda.js';
import { agruparKatasPorDificultad,agruparKatasPorCategoria,agruparKatasPorLenguaje } from './Filtros.js';

document.addEventListener('DOMContentLoaded', () => {
  const nombresKatasDiv = document.querySelector('.nombres-katas');
  const detalleKataDiv = document.querySelector('.detalle-Kata');
  const busquedaButton = document.getElementById('busquedaButton');
  const busquedaInput = document.getElementById('busquedaInput');
  const lenguajeselect = document.getElementById('lenguajeSelect');
  const nombres = obtenerNombres();
  const katasPorDificultad = agruparKatasPorDificultad();
  const categoriaSelect = document.getElementById('categoriaSelect');

  // Mostrar nombres en el HTML y manejo de los clics
  nombresKatasDiv.innerHTML = `<ul>${nombres.map((nombre, index) => `<li><a href="#" data-kata="${index}">${nombre}</a></li>`).join('')}</ul>`;

  nombresKatasDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const kataIndex = event.target.getAttribute('data-kata');
      //const dificultad = event.target.getAttribute('data-dificultad');
      mostrarDetallesDeKata(kataIndex);
      //mostrarKatasPorDificultad(dificultad);
    }
  });

  function mostrarDetallesDeKata(kataIndex) {
    const detalles = detallesKata(kataIndex);
    detalleKataDiv.innerHTML = detalles;
  }

  dificultadSelect.addEventListener('change', (event) => {
    const dificultadSeleccionada = event.target.value;
    const katasPorDificultadDiv = document.getElementById('katasPorDificultadDiv');
    const katasPorDificultad = agruparKatasPorDificultad();

    mostrarKatasPorCriterio(dificultadSeleccionada, katasPorDificultad, nombresKatasDiv, katasPorDificultadDiv);
  });

  categoriaSelect.addEventListener('change', (event) => {
    const categoriaSeleccionada = event.target.value;
    const katasPorCategoriaDiv = document.getElementById('katasPorCategoriaDiv');
    const katasPorCategoria = agruparKatasPorCategoria();

    mostrarKatasPorCriterio(categoriaSeleccionada, katasPorCategoria, nombresKatasDiv, katasPorCategoriaDiv);
  });

  lenguajeselect.addEventListener('change', (event) => {
    const lenguajeSeleccionado = event.target.value;
    const katasPorLenguajeDiv = document.getElementById('katasPorLenguajeDiv');
    const katasPorLenguaje = agruparKatasPorLenguaje();

    mostrarKatasPorCriterio(lenguajeSeleccionado, katasPorLenguaje, nombresKatasDiv, katasPorLenguajeDiv);
  });

  function mostrarKatasPorCriterio(valor, katasAgrupadas, divNombres, divKatas) {
    const katas = katasAgrupadas[valor];
    if (katas) {
      const kataList = katas.map(
        ({ nombre, index }) =>
          `<li><a href="#" data-kata="${index}" data-${divKatas === 'katasPorDificultadDiv' ? 'dificultad' : 'lenguaje'}="${valor}">${nombre}</a></li>`
      ).join('');
      divNombres.innerHTML = `<h2>${valor}</h2><ul>${kataList}</ul>`;
    }
  }
  busquedaButton.addEventListener('click', () => {
    const searchTerm = busquedaInput.value.trim();
    const resultados = busquedaSimple(searchTerm);
    if (resultados && resultados.length > 0) {
      // Si se encontraron resultados, mostrar los nombres en el mismo div
      nombresKatasDiv.innerHTML = `<ul>${resultados.map((nombre, index) => `<li><a href="#" data-kata="${index}">${nombre}</a></li>`).join('')}</ul>`;
    } else {
      // Si no se encontraron resultados, mostrar "Kata no encontrada" en el mismo div
      nombresKatasDiv.innerHTML = 'Kata no encontrada';
    }
  });
});