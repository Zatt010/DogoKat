import { obtenerNombres, detallesKata, crearKata, dificultadKata, categoriaKata,modificarKata,lenguajekata } from "./Kata.js";
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
    nombresKatasDiv.innerHTML = `<ul>${nombres.map((nombre, index) => `
      <li>
        <a href="#" data-kata="${index}">${nombre}</a>
        <button class="modificar-button" data-kata="${index}">Modificar</button>
      </li>`).join('')}</ul>`;
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
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('modificar-button')) {
      event.preventDefault();
      const kataIndex = event.target.getAttribute('data-kata');
      cargarFormularioModificacion(kataIndex);
    }
  });

  function cargarFormularioModificacion(kataIndex) {
    fetch('./modificarKata.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('formulario-kata').innerHTML = html;
        document.getElementById('index').value = kataIndex;
        document.getElementById('nuevoNombre').value = obtenerNombres()[kataIndex];
        document.getElementById('nuevoDetalle').value = detallesKata(kataIndex);
        document.getElementById('nuevaDificultad').value = dificultadKata(kataIndex);
        document.getElementById('nuevaCategoria').value = categoriaKata(kataIndex);
        document.getElementById('nuevoLenguaje').value = lenguajekata(kataIndex);

        const modificarKataForm = document.getElementById('modificar-kata-form');
        modificarKataForm.addEventListener('submit', manejarSubmitModificacion);
      })
      .catch(error => console.error('Error al cargar el formulario:', error));
  }

  function manejarSubmitModificacion(event) {
    event.preventDefault();

    const index = document.getElementById('index').value;
    const nuevoNombre = document.getElementById('nuevoNombre').value;
    const nuevoDetalle = document.getElementById('nuevoDetalle').value;
    const nuevaDificultad = document.getElementById('nuevaDificultad').value;
    const nuevaCategoria = document.getElementById('nuevaCategoria').value;
    const nuevoLenguaje = document.getElementById('nuevoLenguaje').value;

    const exitoModificacion = modificarKata(index, nuevoNombre, nuevoDetalle, nuevaDificultad, nuevaCategoria, nuevoLenguaje);
    console.log('index');

    if (exitoModificacion) {
      alert('Kata modificada exitosamente.');
      const formularioKata = document.getElementById('formulario-kata');
      formularioKata.style.display = 'none';
      cargarNombres();
    } else {
      alert('No se pudo modificar la Kata. Verifica el índice proporcionado.');
    }
  }

}