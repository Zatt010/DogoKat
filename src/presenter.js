import { obtenerNombres, detallesKata } from './Kata.js';
document.addEventListener('DOMContentLoaded', () => {
  const nombresKatasDiv = document.querySelector('.nombres-katas');
  const detalleKataDiv = document.querySelector('.detalle-Kata');
  const nombres = obtenerNombres();

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
});
