import { obtenerNombres, detallesKata } from './Kata.js';

document.addEventListener('DOMContentLoaded', () => {
  const nombresKatasDiv = document.querySelector('.nombres-katas');
  const detalleKataDiv = document.querySelector('.detalle-Kata');
  const creacionKataButton = document.getElementById('creacionKataButton');
  const contenidoPrincipal = document.getElementById('contenido-principal');
  const contenidoCreacion = document.getElementById('contenido-creacion');
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

  // Manejar el clic del botón para ir a la página de creación de Kata
  creacionKataButton.addEventListener('click', () => {
    // Ocultar contenido principal y mostrar contenido de creación
    contenidoPrincipal.style.display = 'none';
    contenidoCreacion.style.display = 'block';
    fetch('../pages/creacionKata.html')
      .then(response => response.text())
      .then(data => {
        contenidoCreacion.innerHTML = data;
      });
  });
});
