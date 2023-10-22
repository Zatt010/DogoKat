import {obtenerNombres} from './nombres.js';

document.addEventListener('DOMContentLoaded', () => {
  const nombresKatasDiv = document.querySelector('.nombres-katas');
  //  nombres de las katas desde nombres.js
  const nombres = obtenerNombres();
  // mostrar los nombres en el HTML
  nombresKatasDiv.innerHTML = `<ul>${nombres.map(nombre => `<li>${nombre}</li>`).join('')}</ul>`;
});
