import{crearUsu} from "./login.js";

describe("Creacion de un usuario", () => {
    it("crear un usuario con nombre y contraseña", () => {
        const nombreUsuario = "Pepe";
        const password = "123";
        const nuevousuario = crearUsu(nombreUsuario, password);
        expect(nuevousuario).toBe(true);
    });
    it("crear un usuario incorrecto", () => {
        const nombreUsuario = "juan";
        const password = "12345";
        const nuevousuario = crearUsu(nombreUsuario, password);
        expect(nuevousuario).toBe(false);
    });
});