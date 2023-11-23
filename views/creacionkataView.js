export default class CreacionKataView {
    render() {
      return `<h1>Creación de Kata</h1>
        <form id="kata-form">
          <label for="nombre">Nombre de la Kata:</label>
          <input type="text" id="nombre" name="nombre" required>
  
          <label for="detalle">Detalle de la Kata:</label>
          <textarea id="detalle" name="detalle" rows="4" required></textarea>
  
          <label for="dificultad">Dificultad de la Kata:</label>
          <select id="dificultad" name="dificultad" required>
            <option value="Avanzado">Avanzado</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Principiante">Principiante</option>
          </select>
  
          <label for="categoria">Categoría de la Kata:</label>
          <select id="categoria" name="categoria" required>
            <option value="Matematicas">Matemáticas</option>
            <option value="Juegos">Juegos</option>
            <option value="Tecnologia">Tecnología</option>
            <option value="Algoritmos">Algoritmos</option>
          </select>
  
          <label for="lenguaje">Lenguaje de la Kata:</label>
          <select id="lenguaje" name="lenguaje" required>
            <option value="c++">c++</option>
            <option value="phyton">phyton</option>
            <option value="javascript">javascript</option>
          </select>
  
          <button type="submit" id="crearKataButton">Crear Kata</button>
        </form>`;
    }
  }