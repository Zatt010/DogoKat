document.addEventListener('DOMContentLoaded', inicializarApp);

function inicializarApp() {
  // Después de realizar alguna validación u operación
  document.getElementById('login-button').style.display = 'inline-block';
  document.getElementById('login-button').addEventListener('click', VerificarUsuario);

  function VerificarUsuario() {
    // Obtener valores del formulario
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;

    // Validar nombre de usuario y contraseña (puedes agregar tu propia lógica aquí)
    var esUsuarioValido = VerificarUsu(username, password);

    if (esUsuarioValido) {
      let newPathname = "";
      if (role === 'maestro') {
          alert("¡Bienvenido Maestro!");
          newPathname = `/maestro.html`;
      } else if (role === 'alumno') {
          alert('¡Bienvenido Alumno!');
          newPathname = `/alumno.html`;
      }
      // Cambiar la ruta sin recargar la página
      window.location.pathname = newPathname;
  }
}

  function VerificarUsu(username, password) {
    // Agrega tu lógica de validación de usuario aquí
    // Devuelve true si el usuario es válido, de lo contrario, false
    return (username === 'maestro' && password === '123') ||
           (username === 'alumno' && password === '123');
  }
}
