export function ValidacionesAddEntrepreneurs(valores) {
    let errores = {};
    let Entrepreneurs = JSON.parse(localStorage.getItem('Entrepreneurs'));
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