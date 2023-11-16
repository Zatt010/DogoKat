import { obtenerNombres } from './Kata.js';

async function busquedaSimple(search) {
    if (search.length > 100) {
        return false;
    }
    const nombres = await obtenerNombres();
    return nombres.filter(nombre => nombre.toLowerCase().includes(search.toLowerCase()));
}

export { busquedaSimple };