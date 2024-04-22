import { useEffect, useState } from "react";
import { IconTop } from "../../Components/Atoms/IconTop";
import { HeaderUser } from "./Components/Organims/HeaderUser";
import { Top } from "../UserTop/Components/Organims/Top";
import { Shop } from "../UserShop/Components/Organims/Shop";
import {  tienda, top, productInfo, shoppingCart, shippingForm, confirmOrder, purchaseTracking, addCar, calcularTotalCarrito, incrementDecrement, Cambio } from "./Functions";
import { ProductInfo } from "../Product/Components/Organims/Info";
import { ShoppingCart } from "./Components/Organims/ShoppingCart";
import { ShippingForm } from "./Components/Organims/ShippingForm";
import { ConfirmOrder } from "./Components/Organims/ConfirmOrder";
import { PurchaseTracking } from "./Components/Organims/PurchaseTracking";
import { Products } from "../../Datos/Datos.Products";
import { Car } from "../../Datos/Datos.Car";
import { Entrepreneurs } from "../../Datos/Datos.Entrepreneurs";
import { SearchBar } from "../../Components/Molecules/SearchBar";
import { CarShopButton } from "./Components/Molecules/CarShopButton";
import { ProductsStyles } from "../../Datos/Datos.ProductsStyles";

export function ShippingForm() {
    const [entrepreneurs, setEntrepreneurs] = useState(Entrepreneurs);
    const [car, setCar] = useState(Car);
    // const [productPrice, setProductPrice] =([])
    const [products, setProduts] = useState([...Products()]);
    const [productsBuscar, setProdutsBuscar] = useState([...products]);
    const [productsStyles, setProdutsStyles] = useState([...ProductsStyles()]);
    const [page, setPage] = useState(top)
    const [activeHeader, setActiveHeader] = useState(true)
    const handleDelete = (productToDelete) => {
        if (Array.isArray(car.car)) {
            const updatedCar = [...car.car.filter(c => c.product.clave !== productToDelete.clave)];
            console.log(updatedCar);
            setCar({
                car: updatedCar,
                totalPrecio: calcularTotalCarrito(updatedCar),
                cantidadTotal: car.cantidadTotal - productToDelete.cantidad
            });
            return 0;
        } else {
            setCar(null);
        }
    };
    return (
        <>
            <ShippingForm Cancelar={() =>  setActiveHeader(true) } SaveData={() => setPage(confirmOrder)} />
        </>
    )
}
