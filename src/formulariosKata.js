
import { obtenerNombres, detallesKata, crearKata, dificultadKata, categoriaKata,modificarKata,lenguajekata } from "./Kata.js";
import ModificarKataView from '../views/modificarView';

export function cargarFormularioModificacion(kataIndex) {
  console.log('Cargando formulario de modificación para kataIndex:', kataIndex);
  return new Promise((resolve, reject) => {
    try {
      const modificarKataView = new ModificarKataView();
      const formularioKata = document.getElementById('formulario-kata');
      formularioKata.innerHTML = modificarKataView.render();

      formularioKata.style.display = 'block';
      document.getElementById('index').value = kataIndex;
      document.getElementById('nuevoNombre').value = obtenerNombres()[kataIndex];
      document.getElementById('nuevoDetalle').value = detallesKata(kataIndex);
      document.getElementById('nuevaDificultad').value = dificultadKata(kataIndex);
      document.getElementById('nuevaCategoria').value = categoriaKata(kataIndex);
      document.getElementById('nuevoLenguaje').value = lenguajekata(kataIndex);

      const modificarKataForm = document.getElementById('modificar-kata-form');
      modificarKataForm.addEventListener('submit', event => {
        manejarSubmitModificacion(event, resolve, reject);
      });
    } catch (error) {
      console.error('Error al cargar el formulario:', error);
      reject(false); // Rechaza la promesa en caso de error
    }
  });
}

function manejarSubmitModificacion(event, resolve, reject) {
  event.preventDefault();
  const index = document.getElementById('index').value;
  const nuevoNombre = document.getElementById('nuevoNombre').value;
  const nuevoDetalle = document.getElementById('nuevoDetalle').value;
  const nuevaDificultad = document.getElementById('nuevaDificultad').value;
  const nuevaCategoria = document.getElementById('nuevaCategoria').value;
  const nuevoLenguaje = document.getElementById('nuevoLenguaje').value;
  const exitoModificacion = modificarKata(index, nuevoNombre, nuevoDetalle, nuevaDificultad, nuevaCategoria, nuevoLenguaje);

  if (exitoModificacion) {
    alert('Kata modificada exitosamente.');
    const formularioKata = document.getElementById('formulario-kata');
    formularioKata.style.display = 'none';
    resolve(true);
  } else {
    alert('No se pudo modificar la Kata. Verifica el índice proporcionado.');
    reject(false);
  }
}

export function cargarFormularioCreacionKata() {//CREAR UNA KATA
  return new Promise((resolve, reject) => {
    fetch('./creacionKata.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        console.log('Formulario de creación cargado con éxito');
        const formularioKata = document.getElementById('formulario-kata');
        formularioKata.innerHTML = html;
        formularioKata.style.display = 'block';
        const crearKataForm = document.getElementById('kata-form');
        crearKataForm.addEventListener('submit', event => {
          manejarSubmitCreacionKata(event, resolve, reject);
        });
      })
      .catch(error => {
        console.error('Error al cargar el formulario:', error);
        reject(false); // Rechaza la promesa en caso de error
      });
  });
}

function manejarSubmitCreacionKata(event, resolve, reject) {
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
    resolve(true);
  } else {
    alert('Error al crear la Kata');
    reject(false);
  }
}