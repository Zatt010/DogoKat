import {busquedaSimple} from "./Busqueda"
class Kata{
  constructor(nombre, detalle, dificultad, categoria,lenguaje,estado){
    this.nombre = nombre;
    this.detalle = detalle;
    this.dificultad = dificultad;
    this.categoria = categoria;
    this.lenguaje = lenguaje;
    this.estado = estado;
  }
}
class login{
  constructor(usuario, password) {
    this.usuario = usuario;
    this.password = password;
  }
}

let Katas = [
  new Kata("KataBankOCR", "Detalles de la primera kata","Principiante","Matematicas","c++","Terminado"),
  new Kata("KataFizzBuzz", "Detalles de la segunda kata","Principiante","Juegos","javascript","Terminado"),
  new Kata("FooBarQix", "Detalles de la tercera kata","Intermedio","Tecnologia","phyton","No Terminado"),
  new Kata("KataPotter", "Detalles de la cuarta kata","Avanzado","Algoritmos","c++","No Terminado")
]
//instancia de la clase login

let usuarios = [
  new login("pepe","123"),
  new login("pedro","123")
]



function obtenerNombres() {
  return Katas.map(Kata => Kata.nombre);
}

function detallesKata(kataIndex) {
  return Katas[kataIndex].detalle;
}

function dificultadKata(kataIndex) {
  return Katas[kataIndex].dificultad;
}
function categoriaKata(kataIndex) {
  return Katas[kataIndex].categoria;
}
function lenguajekata(kataIndex){
  return Katas[kataIndex].lenguaje;
}
function estadoResolucion(kataIndex){
  return Katas[kataIndex].estado;
}

function modificarKata(nombre){
  const resultado= busquedaSimple(nombre).map((estado, index))
  if(resultado.estado=="No Terminado")
  {
    return true
  }
  return false
}

function crearKata(nombreKata, detalleKata, dificultadKata, categoriaKata,lenguajekata) {
  if (nombreKata.length <= 100) {
    Katas.push(new Kata(nombreKata, detalleKata, dificultadKata, categoriaKata,lenguajekata));
    return true
  } else {
    return false;
  }
}
function crearUsu(usuario,password){
  if (password.length <= 3){
   Katas.push(new login(usuario,password));
    return true;
  }
  else{
    return false;
  }
}
export { obtenerNombres, detallesKata, crearKata, dificultadKata, categoriaKata,lenguajekata,crearUsu,estadoResolucion,modificarKata };
