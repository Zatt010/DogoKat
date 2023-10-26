import { obtenerNombres } from './Kata.js';

function busquedaSimple(search) {
    if (search.length > 100) {
        return false;
    }
    const nombres = obtenerNombres();
    return nombres.filter(nombre => nombre.toLowerCase().includes(search.toLowerCase()));
}

function busquedaEstado(search) {
    if (search.length > 100) {
        return false;
    }
    const nombres = obtenerNombres();
    return nombres.filter(nombre => nombre.toLowerCase().includes(search.toLowerCase()));
}

export { busquedaSimple };
