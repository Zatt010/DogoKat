import { obtenerNombres, detallesKata, crearKata } from './Kata.js';
import { busquedaSimple } from './Busqueda.js';
import { agruparKatasPorDificultad, agruparKatasPorCategoria, agruparKatasPorLenguaje } from './Filtros.js';
import { crearUsu } from './login.js';
// presenter.js
document.addEventListener('DOMContentLoaded', function() {
  console.log('Presenter.js se ha ejecutado correctamente');
  // Coloca el resto de tu lógica aquí
});

document.addEventListener('DOMContentLoaded', inicializarApp);


function inicializarApp() {
  // Después de realizar alguna validación u operación


  const nombresKatasDiv = document.querySelector('.nombres-katas');
  const detalleKataDiv = document.querySelector('.detalle-Kata');
  const busquedaButton = document.getElementById('busquedaButton');
  const busquedaInput = document.getElementById('busquedaInput');
  const dificultadSelect = document.getElementById('dificultadSelect');
  const lenguajeSelect = document.getElementById('lenguajeSelect');
  const categoriaSelect = document.getElementById('categoriaSelect');
  const crearKataButton = document.getElementById('crearKata');
  // Agrega un evento click al botón para llamar a la función login

 

  cargarNombres();



  busquedaButton.addEventListener('click', realizarBusqueda);

  dificultadSelect.addEventListener('change', () => mostrarKatasPorCriterio(dificultadSelect.value, agruparKatasPorDificultad()));
  categoriaSelect.addEventListener('change', () => mostrarKatasPorCriterio(categoriaSelect.value, agruparKatasPorCategoria()));
  lenguajeSelect.addEventListener('change', () => mostrarKatasPorCriterio(lenguajeSelect.value, agruparKatasPorLenguaje()));

  function mostrarKatasPorCriterio(valor, katasAgrupadas) {
    const divKatas = document.getElementById(`katasPor${capitalize(valor)}Div`);
    const katas = katasAgrupadas[valor];

    if (katas) {
      const kataList = katas.map(({ nombre, index }) => `<li><a href="#" data-kata="${index}">${nombre}</a></li>`).join('');
      nombresKatasDiv.innerHTML = `<h2>${valor}</h2><ul>${kataList}</ul>`;
    }
  }

  function cargarNombres() {
    const nombres = obtenerNombres();
    nombresKatasDiv.innerHTML = `<ul>${nombres.map((nombre, index) => `<li><a href="#" data-kata="${index}">${nombre}</a></li>`).join('')}</ul>`;
    nombresKatasDiv.addEventListener('click', manejarClickNombre);
  }

  function manejarClickNombre(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const kataIndex = event.target.getAttribute('data-kata');
      mostrarDetallesDeKata(kataIndex);
    }
  }

  function realizarBusqueda() {
    const searchTerm = busquedaInput.value.trim();
    const resultados = busquedaSimple(searchTerm);
    if (resultados && resultados.length > 0) {
      nombresKatasDiv.innerHTML = `<ul>${resultados.map((nombre, index) => `<li><a href="#" data-kata="${index}">${nombre}</a></li>`).join('')}</ul>`;
    } else {
      nombresKatasDiv.innerHTML = 'Kata no encontrada';
    }
  }

  

  function mostrarDetallesDeKata(kataIndex) {
    const detalles = detallesKata(kataIndex);
    detalleKataDiv.innerHTML = detalles;
  }

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}


