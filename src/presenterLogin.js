
// presenter.js
document.addEventListener('DOMContentLoaded', function() {
  console.log('Presenter.js se ha ejecutado correctamente!');
  // Coloca el resto de tu lógica aquí
});

document.addEventListener('DOMContentLoaded', inicializarApp);


function inicializarApp() {
  // Después de realizar alguna validación u operación
 // Después de realizar alguna validación u operación
 document.getElementById('login-button').style.display = 'inline-block';

 document.getElementById('login-button').addEventListener('click', VerificarUsuario);


  function VerificarUsuario() {
    // Obtener valores del formulario
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var role = document.getElementById('role').value;
    

    //var esUsuarioValido = VerificarUsu(username,password)
    // Validar nombre de usuario y contraseña (puedes agregar tu propia lógica aquí)

    
      // Redirigir según el rol
      if ((username === 'maestro') && (password === '123') && (role === 'maestro') ) {
        alert("se ingreso bien");
        window.location.href = '../pages/maestro.html';
      } else if ((username === 'alumno') && (password === '123') && (role === 'alumno') ) {
        alert('se ingreso correctamente');
        window.location.href = '../pages/alumno.html';
      }

  }

  

}


