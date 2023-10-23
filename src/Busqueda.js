import { obtenerNombres } from './Kata.js';

function busquedaSimple(search) {
    if (search.length > 100) {
        return false;
    }
    return obtenerNombres();
    ;
}

export { busquedaSimple };
