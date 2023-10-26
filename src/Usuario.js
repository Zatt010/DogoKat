
class Usuario {
    constructor(email) {
        this.email = email;
    }
    get detalle() {
        return `${this.email}`;
    }
}

export { Usuario };