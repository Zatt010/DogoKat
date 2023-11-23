export default class LoginView {
    presenterPath() {
        return './presenterLogin.js';  // Ruta relativa al módulo desde loginView.js
    }

    render() {
        return `<div style="text-align: center;">
            <form id="login-form" class="flexbox-align__content">
                <label for="username">Nombre:</label>
                <input type="text" id="username" name="username" required>
                <br></br>
                <label for="password">Contraseña:</label>
                <input type="password" id="password" name="password" required>
                <br></br>
                <label for="role">Selecciona tu rol:</label>
                <select id="role" name="role">
                    <option value="maestro">Maestro</option>
                    <option value="alumno">Alumno</option>
                </select>
                <input style="display:block-inline" type="submit" value="Iniciar sesión" id="login-button" />
            </form>
        </div>`;
    }
}
