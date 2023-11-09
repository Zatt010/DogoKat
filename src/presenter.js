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

  function mostrarKatasPorDificultad(dificultad) {
    const katas = katasPorDificultad[dificultad];
    if (katas) {
      const kataList = katas.map(
        ({ nombre, index }) =>
          `<li><a href="#" data-kata="${index}" data-dificultad="${dificultad}">${nombre}</a></li>`
      ).join('');
      nombresKatasDiv.innerHTML = `<h2>${dificultad}</h2><ul>${kataList}</ul>`;
    }
  }

   // Mostrar nombres por dificultad en el HTML y manejo de clics
  ['Avanzado', 'Intermedio', 'Principiante'].forEach((dificultad) =>{
   if (katasPorDificultad[dificultad]) {
    const katas = katasPorDificultad[dificultad];
    const kataList = katas.map(
      ({ nombre, index }) =>
        `<li><a href="#" data-kata="${index}" data-dificultad="${dificultad}">${nombre}</a></li>`
    ).join('');
    nombresKatasDiv.innerHTML += `<h2 id="${dificultad}-title">${dificultad}</h2><ul>${kataList}</ul>`;
   }
  });

  ['Avanzado', 'Intermedio', 'Principiante'].forEach((dificultad) => {
    const dificultadTitle = document.getElementById(`${dificultad}-title`);
    if (dificultadTitle) {
      dificultadTitle.addEventListener('click', () => {
        mostrarKatasPorDificultad(dificultad);
      });
    }
  });
  categoriaSelect.addEventListener('change', (event) => {
    const categoriaSeleccionada = event.target.value;
    const katasPorCategoriaDiv = document.getElementById('katasPorCategoriaDiv');
    const katasPorCategoria = agruparKatasPorCategoria();

    if (katasPorCategoria[categoriaSeleccionada]) {
      const katasDeCategoria = katasPorCategoria[categoriaSeleccionada];
      const kataList = katasDeCategoria.map(
        ({ nombre, index }) =>
          `<li><a href="#" data-kata="${index}" data-dificultad="${categoriaSeleccionada}">${nombre}</a></li>`
      ).join('');
      nombresKatasDiv.innerHTML = `<h2>${categoriaSeleccionada}</h2><ul>${kataList}</ul>`;
    } else {
      katasPorCategoriaDiv.innerHTML = 'No se encontraron katas en esta categoría.';
    }
  });
  function mostrarKatasPorLenguaje(lenguajeSeleccionado) {
    const katasPorLenguajeDiv = document.getElementById('katasPorLenguajeDiv');
    const katasPorLenguaje = agruparKatasPorLenguaje();
  
    if (katasPorLenguaje[lenguajeSeleccionado]) {
      const katasDelLenguaje = katasPorLenguaje[lenguajeSeleccionado];
      const kataList = katasDelLenguaje.map(
        ({ nombre, index }) =>
          `<li><a href="#" data-kata="${index}" data-lenguaje="${lenguajeSeleccionado}">${nombre}</a></li>`
      ).join('');
      katasPorLenguajeDiv.innerHTML = `<h2>${lenguajeSeleccionado}</h2><ul>${kataList}</ul>`;
    } else {
      katasPorLenguajeDiv.innerHTML = 'No se encontraron katas en este lenguaje.';
    }
  }
  
  lenguajeSelect.addEventListener('change', (event) => {
    const lenguajeSeleccionado = event.target.value;
    mostrarKatasPorLenguaje(lenguajeSeleccionado);
  });

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