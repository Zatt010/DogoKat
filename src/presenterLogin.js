const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const roleSelect = document.querySelector("#role");
const loginButton = document.querySelector("#login-button");
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const role = roleSelect.value;

    if (VerificarUsu(username, password, role)) {
      alert('Bienvenido');
        console.log("Inicio de sesión exitoso");
    } else {
        // Credenciales inválidas, puedes manejar esto de acuerdo a tus necesidades
        console.log("Credenciales inválidas");
    }
});

function VerificarUsu(username, password, role) {
    return (role === 'maestro' && username === 'maestro' && password === '123') ||
            (role === 'alumno' && username === 'alumno' && password === '123');
}
