import LoginView from '../views/loginView';

const route = (event) => {
  handleLocation();
};

const routes = {
  "/": new LoginView()
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const view = routes[path] || routes[404];
  const html = view.render();
  document.getElementById("main-page").innerHTML = html;

  try {
    // Ajusta la ruta del módulo según la estructura de tu proyecto
    await import("./presenterLogin.js");
  } catch (error) {
    console.error("Error al cargar el presentador:", error);
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
