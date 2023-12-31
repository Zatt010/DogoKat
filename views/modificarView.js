export default class ModificarKataView {
    render() {
    return `<h1>Modificación de Kata</h1>
        <form id="modificar-kata-form">
        <input type="hidden" id="index" name="index">
        <label for="nuevoNombre">Nuevo Nombre de la Kata:</label>
        <input type="text" id="nuevoNombre" name="nuevoNombre" required>

        <label for="nuevoDetalle">Nuevo Detalle de la Kata:</label>
        <textarea id="nuevoDetalle" name="nuevoDetalle" rows="4" required></textarea>

        <label for="nuevaDificultad">Nueva Dificultad de la Kata:</label>
        <select id="nuevaDificultad" name="nuevaDificultad" required>
            <option value="Avanzado">Avanzado</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Principiante">Principiante</option>
        </select>

        <label for="nuevaCategoria">Nueva Categoría de la Kata:</label>
        <select id="nuevaCategoria" name="nuevaCategoria" required>
            <option value="Matematicas">Matemáticas</option>
            <option value="Juegos">Juegos</option>
            <option value="Tecnologia">Tecnología</option>
            <option value="Algoritmos">Algoritmos</option>
        </select>

        <label for="nuevoLenguaje">Nuevo Lenguaje de la Kata:</label>
        <select id="nuevoLenguaje" name="nuevoLenguaje" required>
            <option value="c++">c++</option>
            <option value="phyton">phyton</option>
            <option value="javascript">javascript</option>
        </select>

        <button type="submit" id="modificarKataButton">Modificar Kata</button>
        </form>`;
    }
  }
  