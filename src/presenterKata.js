import { crearKata } from './Kata.js';

const crearKataButton = document.getElementById('crearKataButton');

    crearKataButton.addEventListener('click', (event) => {
    event.preventDefault();

    const nombreKataInput = document.getElementById('nombre');
    const detalleKataInput = document.getElementById('detalle');
    const dificultadKataSelect = document.getElementById('dificultad');

    const nombreKata = nombreKataInput.value;
    const detalleKata = detalleKataInput.value;
    const dificultadKata = dificultadKataSelect.value;

    const kataCreada = crearKata(nombreKata, detalleKata, dificultadKata);

    if (kataCreada) {
        alert('Kata creada con éxito');
    } else {
        alert('Error al crear la Kata');
    }
    });
