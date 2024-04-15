export class Product {
    constructor(clave, nombre, cantidad, tipo) {
        this.clave = clave;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipo = tipo;
    }
    
        // "clave": "VJ8W9E",
        // "nombre": "Eco twist",
        // "cantidad": 4,
        // "tipo":"Bote"

    updateProduct(clave, nombre, tipo ) {
        this.clave = clave;
        this.nombre = nombre;
        this.tipo = tipo;
    }
    updateCantidad(cantidad){
        this.cantidad = cantidad;
    }
    getClave(){
        return this.clave;
    }
}

export const buscarProduct = (value, type, Products) => {
    if (value === "") {
        return Products;
    }
    switch (type) {
        case "clave de producto":
            return [...Products.filter(({ clave }) => clave === value)];
        default:
            return [...Products.filter((product) => {
                return product.nombre.toLowerCase().includes(value.toLowerCase());
            })];
    } 
}

import P from './Products.json';
export const Products = () => {
    //                                              clave,         nombre,         cantidad,         tipo
    let P2 = [...P.map((product) => product)];
    return P2;
}