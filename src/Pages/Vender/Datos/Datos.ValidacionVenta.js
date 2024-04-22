export function ValidacionVenta(cantidad, ventaTotal) {
    let errores;
    if (cantidad === '') {
        errores = { error: false }
    } else if (cantidad <= 0) {
        errores = { error: true, message: 'Ingresa una cantidad positiva.' };
    } else if (cantidad < ventaTotal) {
        errores = { error: true, message: `Ingrese una cantidad mayor o igual a: $${ventaTotal}.` };
    } else {
        errores = { error: false }
    }

    return errores;
}
