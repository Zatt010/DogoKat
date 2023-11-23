export default class MaestroView {
    presenterPath() {
        return './presenterMaeestro.js';  // Ajusta la ruta según tu estructura de archivos
    }

    render() {
        return `<html>
            <head>
                <title>KitPatitasKat TDD</title>
            </head>
            <body>
            <h1>KitPatitasKat TDD maestro</h1>
            <label for="dificultadSelect">Seleccionar Dificultad:</label>
            <select id="dificultadSelect">
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
            </select>

            <label for="categoriaSelect">Seleccionar Categoría:</label>
            <select id="categoriaSelect">
                <option value="Matematicas">Matemáticas</option>
                <option value="Juegos">Juegos</option>
                <option value="Tecnologia">Tecnología</option>
                <option value="Algoritmos">Algoritmos</option>
            </select>

            <label for="lenguajeSelect">Seleccionar lenguaje:</label>
            <select id="lenguajeSelect">
                <option value="c++">c++</option>
                <option value="phyton">phyton</option>
                <option value="javascript">javascript</option>
            </select>
                <br></br>
                <button id="crearKata">Ir a Creación de Kata</button>
                <br></br>
                <div class="contenido" id="contenido-principal">
                    <input type="text" id="busquedaInput" placeholder="Buscar Kata">
                    <button id="busquedaButton">Buscar</button>
                    <div class="nombres-katas"></div>
                    <div class="detalle-Kata"></div>
                    <div class="form" id="formulario-kata"></div>

                    <div id="katasPorCategoriaDiv"></div>
                    <div id="katasPorLenguajeDiv"></div>
                </div>

                <script type="module" src="./presenterMaestro.js"></script>
            </body>
        </html>`;
    }
}
