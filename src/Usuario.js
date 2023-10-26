
class Usuario {
        constructor(email, contrasena) {
        this.email = email;
        this.contrasena = contrasena;
        }
        get detalle() {
        return `${this.email}: ${this.contrasena}`;
        }
    }

    const usuarioPredeterminado = new Usuario("prueba@gmail.com", "123");

    export { Usuario, usuarioPredeterminado };