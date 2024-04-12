export class ProductStyle {
    constructor(clave, nombre, cantidad, precio, categoria, descripcion, img) {
        this.clave = clave;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.img = img;
    }

    // "clave": "VJ8W9E-Rojo",
    // "nombre": "Rojo",
    // "cantidad": 5,
    // "precio": 12000,
    // "categoria": "Linea de liquidos",
    // "descripcion": "Un produto exelente para llevar agua.",
    // "img": "https://www.tupperware.com.mx/cdn/shop/products/G323BW_g_1_800x.png?v=1692642841"

    updateProductStyle(nombre, cantidad, precio, categoria, descripcion, img) {
        this.clave = `${this.getClave()}-${nombre}`;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.img = img;
    }
    updateClave(clave){
        this.clave = `${clave}-${this.nombre}`
    }
    getClave() {
        return this.clave.split('-')[0];
    }
    getClaveCompleta() {
        return this.clave;
    }
    getImg(){
        return this.img;
    }
    getCantidad(){
        return this.cantidad;
    }
}
import PS from './ProductsStyles.json';
export const ProductsStyles = () => {

    let PS2 = [...PS.map((productStyle) => new ProductStyle(
        productStyle.clave,
        productStyle.nombre,
        productStyle.cantidad,
        productStyle.precio,
        productStyle.categoria,
        productStyle.descripcion,
        productStyle.img
    ))];
    return PS2;
}