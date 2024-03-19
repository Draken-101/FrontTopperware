export function Validaciones(valores) {
    let errores = {};

    if (valores.cantidad < 0) {
        errores.cantidad = 'Por favor ingresa una cantidad positiva'
    }
    return errores;
}