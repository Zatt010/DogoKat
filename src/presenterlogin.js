const form = document.getElementById("loginForm");
        const errorMessage = document.getElementById("error-message");

        form.addEventListener("submit", function(event) {
            if (!form.email.value || !form.contrasena.value) {
                errorMessage.textContent = "No se ingresó un campo con éxito";
                event.preventDefault();
            }
        });