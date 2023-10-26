import { Usuarios } from './Usuario';
const form = document.getElementById("loginForm");
        const errorMessage = document.getElementById("error-message");

        form.addEventListener("submit", function(event) {
            if (!form.email.value || !form.contrasena.value) {
                errorMessage.textContent = "No se ingresó un campo con éxito";
                event.preventDefault();
            }
            const email = form.email.value;
            const contrasena = form.contrasena.value;
            const usuarioPredeterminado = Usuarios[0];

            if (email === usuarioPredeterminado.email && contrasena === usuarioPredeterminado.contrasena) {
            window.location.href = '../pages/index.html';
            } else {
            errorMessage.textContent = "Correo electrónico o contraseña incorrectos. Inténtalo de nuevo.";
            }
        });