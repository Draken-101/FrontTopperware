export function Validaciones(valores, cantidadDisponible) {
    const errores = {};

    if (valores.cantidad <= 0) {
        errores.cantidad = 'Ingresa una cantidad positiva.';
    } else if (valores.cantidad > cantidadDisponible) {
        errores.cantidad = `La cantidad seleccionada supera la cantidad disponible (${cantidadDisponible}).`;
    }

    return errores;
}
