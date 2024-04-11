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
import P from './Products.json';
export const Products = () => {
    let P2 = [...P.map((product) => new Product(product.clave, product.nombre, product.cantidad, product.tipo))];
    return P2;
}