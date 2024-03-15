export function Validaciones(valores) {
    let errores = {};

    if (!valores.user) {
        errores.user = 'Por favor ingresa un nombre'
    }
    if (!valores.password) {
        errores.password = 'Por favor ingresa una contraseña'
    }
    return errores;
}