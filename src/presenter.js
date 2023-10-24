import { obtenerNombres, detallesKata, dificultadKata } from './Kata.js';
import { busquedaSimple } from './Busqueda.js';
import { agruparKatasPorDificultad } from './Filtros.js';

document.addEventListener('DOMContentLoaded', () => {
  const nombresKatasDiv = document.querySelector('.nombres-katas');
  const detalleKataDiv = document.querySelector('.detalle-Kata');
  const busquedaButton = document.getElementById('busquedaButton');
  const busquedaInput = document.getElementById('busquedaInput');
  const creacionKataButton = document.getElementById('creacionKataButton');
  const contenidoPrincipal = document.getElementById('contenido-principal');
  const contenidoCreacion = document.getElementById('contenido-creacion');
  const nombres = obtenerNombres();
  const katasPorDificultad = agruparKatasPorDificultad();

  // Mostrar nombres en el HTML y manejo de los clics
  nombresKatasDiv.innerHTML = `<ul>${nombres.map((nombre, index) => `<li><a href="#" data-kata="${index}">${nombre}</a></li>`).join('')}</ul>`;

  nombresKatasDiv.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const kataIndex = event.target.getAttribute('data-kata');
      mostrarDetallesDeKata(kataIndex);
    }
  });

  function mostrarDetallesDeKata(kataIndex) {
    const detalles = detallesKata(kataIndex);
    detalleKataDiv.innerHTML = detalles;
  }

   // Mostrar nombres por dificultad en el HTML y manejo de clics
  for (const dificultad in katasPorDificultad) {
    const katas = katasPorDificultad[dificultad];
    const kataList = katas.map(
      ({ nombre, index }) =>
        `<li><a href="#" data-kata="${index}">${nombre}</a></li>`
    ).join('');
    nombresKatasDiv.innerHTML += `<h2>${dificultad}</h2><ul>${kataList}</ul>`;
  }

  // Manejar el clic del botón para ir a la página de creación de Kata
  creacionKataButton.addEventListener('click', () => {
    // Ocultar contenido principal y mostrar contenido de creación
    contenidoPrincipal.style.display = 'none';
    contenidoCreacion.style.display = 'block';
    fetch('./pages/CreacionKatas.html')
      .then(response => response.text())
      .then(data => {
        contenidoCreacion.innerHTML = data;
      });
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
