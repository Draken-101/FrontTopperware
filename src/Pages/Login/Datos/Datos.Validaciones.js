export function Validaciones(valores) {
    let errores = {};

    if (!valores.email) {
        errores.email = 'Por favor ingresa un nombre'
    }
    if (!valores.password) {
        errores.password = 'Por favor ingresa una contraseña'
    }
    return errores;
}