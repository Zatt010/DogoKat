class login{
    constructor(usuario, password) {
        this.usuario = usuario;
        this.password = password;
    }
}

let usuarios = [
    new login("pepe","123"),
    new login("pedro","123")
]

function crearUsu(usuario,password){
    if (password.length <= 3){
        usuarios.push(new login(usuario,password));
        return true;
    }
    else{
        return false;
    }
}

export {crearUsu}