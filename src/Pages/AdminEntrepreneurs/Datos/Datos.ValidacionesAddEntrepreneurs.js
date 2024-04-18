export function ValidacionesAddEntrepreneurs(valores) {
    let errores = {};
    if (valores.semana1 < 0) {
        errores.semana1 = 'Por favor ingresa un numero positivo.'
    }
    if (valores.semana2 < 0) {
        errores.semana2 = 'Por favor ingresa un numero positivo.'
    }
    if (valores.semana3 < 0) {
        errores.semana3 = 'Por favor ingresa un numero positivo.'
    }
    if (!valores.nombres) {
        errores.nombres = 'Por favor ingresa un nombre o tus nombres.'
    }
    if (!valores.apellidos) {
        errores.apellidos = 'Por favor ingresa tus apellidos.'
    } else if (!/^[A-ZÁÉÍÓÚÜÑa-záéíóúüñ]+(\s[A-ZÁÉÍÓÚÜÑa-záéíóúüñ]+)?$/.test(valores.apellidos)) {
        errores.apellidos = 'Por favor ingresa un apellidos validos.'
    }
    if (!valores.numeroCliente) {
        errores.numeroCliente = 'Por favor ingresa un numero de cliente.'
    }
    return errores;
}