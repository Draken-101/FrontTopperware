export function ValidacionesAddEntrepreneurs(valores) {
    let errores = {};

    if (!valores.nombres) {
        errores.nombres = 'Por favor ingresa un nombre o tus nombres.'
    }
    if (!valores.apellidos) {
        errores.apellidos = 'Por favor ingresa tus apellidos.'
    } else if (!/^[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*$/.test(valores.apellidos)) {
        errores.apellidos = 'Por favor ingresa un apellido valido.'
    }
    return errores;
}