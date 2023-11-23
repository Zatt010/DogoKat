import {
  obtenerNombres,
  detallesKata,
  eliminarKata
} from "./Kata.js";
import {
  busquedaSimple
} from './Busqueda.js';
import {
  agruparKatasPorDificultad,
  agruparKatasPorCategoria,
  agruparKatasPorLenguaje
} from './Filtros.js';
import * as formularios from './formulariosKata.js';

  console.log('presenter maestro cargado')
  const nombresKatasDiv = document.querySelector('.nombres-katas');
  const detalleKataDiv = document.querySelector('.detalle-Kata');
  const busquedaButton = document.getElementById('busquedaButton');
  const busquedaInput = document.getElementById('busquedaInput');
  const dificultadSelect = document.getElementById('dificultadSelect');
  const lenguajeSelect = document.getElementById('lenguajeSelect');
  const categoriaSelect = document.getElementById('categoriaSelect');
  const crearKataButton = document.getElementById('crearKata');
  cargarNombres();
  busquedaButton.addEventListener('click', realizarBusqueda);
  dificultadSelect.addEventListener('change', () => mostrarKatasPorCriterio(dificultadSelect.value, agruparKatasPorDificultad()));
  categoriaSelect.addEventListener('change', () => mostrarKatasPorCriterio(categoriaSelect.value, agruparKatasPorCategoria()));
  lenguajeSelect.addEventListener('change', () => mostrarKatasPorCriterio(lenguajeSelect.value, agruparKatasPorLenguaje()));

  function generarListaKatasHTML(katas) {
    return `<ul>${katas.map(({ nombre, index }) => `
      <li>
        <a href="#" data-kata="${index}">${nombre}</a>
        <button class="modificar-button" data-kata="${index}">Modificar</button>
        <button class="eliminar-button" data-kata="${index}">Eliminar</button>
      </li>`).join('')}</ul>`;
  }

  function mostrarKatasPorCriterio(valor, katasAgrupadas) {
    const divKatas = document.getElementById(`katasPor${capitalize(valor)}Div`);
    const katas = katasAgrupadas[valor];
    if (katas) {
      const kataList = generarListaKatasHTML(katas);
      nombresKatasDiv.innerHTML = `<h2>${valor}</h2>${kataList}`;
    }
  }

  function cargarNombres() {
    let nombres = obtenerNombres();
    const listaHTML = nombres.map((nombre, index) => `
      <li>
        <a href="#" data-kata="${index}">${nombre}</a>
        <button class="modificar-button" data-kata="${index}">Modificar</button>
        <button class="eliminar-button" data-kata="${index}">Eliminar</button>
      </li>`
    ).join('');
    console.log('Lista HTML generada:', listaHTML);
    nombresKatasDiv.innerHTML = `<ul>${listaHTML}</ul>`;
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
      nombresKatasDiv.innerHTML = `<ul>${resultados.map((nombre, index) => `<li><a href="#" data-kata="${index}">${nombre}</a><button class="modificar-button" data-kata="${index}">Modificar</button><button class="eliminar-button" data-kata="${index}">Eliminar</button></li>`).join('')}</ul>`;
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

  function manejarCargaFormulario(promesa) {
    promesa
      .then(resultado => {
        if (resultado) {
          console.log('recibido', resultado);
          cargarNombres();
        } else {
          console.log('no recibido', resultado);
        }
      })
      .catch(error => {
        console.error('Error al cargar el formulario:', error);
      });
  }

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modificar-button')) {
      console.log('presionando modificar');
      const kataIndex = event.target.getAttribute('data-kata');
      manejarCargaFormulario(formularios.cargarFormularioModificacion(kataIndex), 'Formulario de modificación cargado con éxito');
    }
  });

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('eliminar-button')) {
      console.log('presionando eliminar');
      const kataIndex = event.target.getAttribute('data-kata');
      const eliminacionExitosa = eliminarKata(kataIndex);
      if (eliminacionExitosa) {
        alert('Kata eliminada con éxito');
        cargarNombres();
      } else {
        console.log('No se pudo eliminar la Kata. Verifica el índice proporcionado.');
      }
    }
  });

  crearKataButton.addEventListener('click', function() {
    manejarCargaFormulario(formularios.cargarFormularioCreacionKata(), 'Formulario de creación cargado con éxito');
  });