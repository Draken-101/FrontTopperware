export function ValidacionesAddProduct(valores) {
    let errores = {};
    
    if (!valores.nombre) {
        errores.nombre = "Ingrese un nombre de estilo."
    }
    if (valores.cantidad < 0) {
        errores.cantidad = "Ingrese una cantidad positiva."
    }
    if (valores.precio < 0) {
        errores.precio = "Ingrese un precio valido."
    }
    if (!valores.categoria) {
        errores.categoria = "Ingrese una categoria para el producto."
    }
    if (!valores.descripcion) {
        errores.descripcion = "Ingrese una descripcion para el producto."
    }
    

    return errores;
}