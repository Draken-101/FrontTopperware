export const Cambio = (page) => {
    if (page.pageName === "Tienda") {
        return (top)
    } else {
        return (tienda)
    }
}
export function Switch(see) {
    if (see) {
        return (false)
    } else {
        return (true)
    }
}
export const tienda = {
    pageName: "Tienda",
    icon: "src/assets/Icons/icons8-tienda-96.png",
    nameButton: "Top",
    iconButton: "/assets/Icons/icons8-corona-96.png"
}
export const top = {
    pageName: "Top",
    icon: "/assets/Icons/icons8-corona-96.png",
    nameButton: "Tienda",
    iconButton: "/assets/Icons/icons8-tienda-96.png"
}
export const productInfo = {
    pageName: "ProductInfo",
    icon: "/assets/Icons/icons8-tienda-96.png",
    nameButton: "Top",
    iconButton: "/assets/Icons/icons8-corona-96.png"
}
export const shoppingCart = {
    pageName: "ShoppingCart",
    icon: "/assets/Icons/icons8-tienda-96.png",
    nameButton: "Top",
    iconButton: "/assets/Icons/icons8-corona-96.png"
}
export const shippingForm = {
    pageName: "ShippingForm",
}
export const confirmOrder = {
    pageName: "ConfirmOrder",
}
export const purchaseTracking = {
    pageName: "PurchaseTracking",
}
export const addCar = (producto, carritoExistente, Nombre) => {
    if (!carritoExistente) {
        const nuevoCarrito = {
            car: [
                {
                    nombre: Nombre,
                    product: producto,
                    totalPrecio: producto.cantidad * producto.precio
                }
            ],
            totalPrecio: producto.cantidad * producto.precio,
            cantidadTotal: producto.cantidad
        };
        return nuevoCarrito;
    } else if (Array.isArray(carritoExistente.car)) {
        const productoExistente = carritoExistente.car.find(p => p.product.clave === producto.clave);
        if (productoExistente) {
            const carritoActualizado = carritoExistente.car.map(p => {
                        if (p.product.clave === producto.clave) {
                            p.product.cantidad = producto.cantidad;
                            return { product:p.product, nombre: Nombre, totalPrecio:p.product.cantidad * p.product.precio  };
                        } else {
                            return p;
                        }
                    });
            return {
                car: [...carritoActualizado],
                totalPrecio: calcularTotalCarrito([...carritoActualizado]),
                cantidadTotal: carritoActualizado.cantidadTotal - productoExistente.cantidad + producto.cantidad
            };
        } else {
            const carritoActualizado = {
                car: [
                    ...carritoExistente.car,
                    {
                        nombre: Nombre,
                        product: producto,
                        totalPrecio: producto.cantidad * producto.precio
                    }
                ],
                totalPrecio: calcularTotalCarrito([...carritoExistente.car, {
                    nombre: Nombre,
                    product: producto,
                    totalPrecio: producto.cantidad * producto.precio
                }]),
                cantidadTotal: carritoExistente.cantidadTotal + producto.cantidad
            };
            return carritoActualizado;
        }
    } else {
        console.error('El carrito existente no es un arreglo válido.');
        return carritoExistente;
    }
};

export const calcularTotalCarrito = (productos) => {
    return productos.reduce((total, producto) => {
        return total + (producto.product.cantidad * producto.product.precio);
    }, 0);
};

import { Products } from '../../Datos/Datos.Products'

export const incrementDecrement = (p, isIncrement) => {
    const productNombre = Products.find(product => product.nombre === p.nombre);
    const productClave = productNombre.estilos.find(product => product.clave === p.product.clave);
    const product = {...p.product}
    if (productClave.cantidad > p.product.cantidad && isIncrement) {
        product.cantidad += 1;
    } else if (p.product.cantidad > 1 && !isIncrement) {
        product.cantidad -= 1;
    } else if (p.product.cantidad == 1 && !isIncrement) {
        return null;
    }
    return product;
}