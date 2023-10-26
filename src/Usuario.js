
class Usuario {
    constructor(email, contrasena) {
        this.email = email;
        this.contrasena = contrasena;
        }
        get detalle() {
        return `${this.email}: ${this.contrasena}`;
        }
    }
    const Usuarios = [new Usuario("prueba@gmail.com", "a")];

export { Usuario, Usuarios };
