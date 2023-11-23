import LoginView from '../views/loginView';
import MaestroView from '../views/maestroView';
import alumnoView from '../views/alumnoView.js';
const route = (event) => {
  handleLocation();
};

const routes = {
  "/": new LoginView(),
  "/maestro": new MaestroView(),
  "/alumno": new alumnoView(),
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const view = routes[path] || routes[404];
  const html = view.render();
  document.getElementById("main-page").innerHTML = html;

  try {
    if (path == "/maestro") {
      await import("./presenterMaeestro.js");
    }
    else if(path == "/"){
    await import("./presenterLogin.js");
    }
    if(path == "/alumno"){
      await import("./presenterAlumno.js")
    }
  } catch (error) {
    console.error("Error al cargar el presentador:", error);
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
