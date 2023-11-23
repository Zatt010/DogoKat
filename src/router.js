import LoginView from '../views/loginView';
import MaestroView from '../views/maestroView';
const route = (event) => {
  handleLocation();
};

const routes = {
  "/": new LoginView(),
  "/maestro": new MaestroView(),
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
  } catch (error) {
    console.error("Error al cargar el presentador:", error);
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
