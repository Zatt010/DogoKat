import { obtenerNombres, detallesKata, crearKata } from './Kata.js';
import { busquedaSimple } from './Busqueda.js';
import { agruparKatasPorDificultad, agruparKatasPorCategoria, agruparKatasPorLenguaje } from './Filtros.js';

document.addEventListener('DOMContentLoaded', inicializarApp);

function inicializarApp() {
  const nombresKatasDiv = document.querySelector('.nombres-katas');
  const detalleKataDiv = document.querySelector('.detalle-Kata');
  const busquedaButton = document.getElementById('busquedaButton');
  const busquedaInput = document.getElementById('busquedaInput');
  const dificultadSelect = document.getElementById('dificultadSelect');
  const lenguajeSelect = document.getElementById('lenguajeSelect');
  const categoriaSelect = document.getElementById('categoriaSelect');
  const crearKataButton = document.getElementById('crearKata');

  cargarNombres();

  crearKataButton.addEventListener('click', cargarFormularioKata);
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

  function cargarFormularioKata() {
    fetch('./creacionKata.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('formulario-kata').innerHTML = html;
        const crearKataForm = document.getElementById('kata-form');
        crearKataForm.addEventListener('submit', manejarSubmitFormulario);
      })
      .catch(error => console.error('Error al cargar el formulario:', error));
  }

  function manejarSubmitFormulario(event) {
    event.preventDefault();

    const nombreKataInput = document.getElementById('nombre');
    const detalleKataInput = document.getElementById('detalle');
    const dificultadKataSelect = document.getElementById('dificultad');
    const categoriaKataSelect = document.getElementById('categoria');
    const lenguajeKataSelect = document.getElementById('lenguaje');

    const nombreKata = nombreKataInput.value;
    const detalleKata = detalleKataInput.value;
    const dificultadKata = dificultadKataSelect.value;
    const categoriaKata = categoriaKataSelect.value;
    const lenguajeKata = lenguajeKataSelect.value;

    const kataCreada = crearKata(nombreKata, detalleKata, dificultadKata, categoriaKata, lenguajeKata);

    if (kataCreada) {
      alert('Kata creada con éxito');
      const formularioKata = document.getElementById('formulario-kata');
      formularioKata.style.display = 'none';
      cargarNombres();
    } else {
      alert('Error al crear la Kata');
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
