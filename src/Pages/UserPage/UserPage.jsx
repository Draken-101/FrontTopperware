import { useEffect, useState } from "react";
import { IconTop } from "../../Components/Atoms/IconTop";
import { HeaderUser } from "./Components/Organims/HeaderUser";
import { Top } from "./Components/Organims/Top";
import { Shop } from "./Components/Organims/Shop";
import { Cambio, tienda, top, productInfo, shoppingCart, shippingForm, confirmOrder, purchaseTracking, addCar, calcularTotalCarrito, incrementDecrement } from "./Functions";
import { ProductInfo } from "./Components/Organims/ProductInfo";
import { ShoppingCart } from "./Components/Organims/ShoppingCart";
import { ShippingForm } from "./Components/Organims/ShippingForm";
import { ConfirmOrder } from "./Components/Organims/ConfirmOrder";
import { PurchaseTracking } from "./Components/Organims/PurchaseTracking";
import { Entrepreneurs } from "../../Datos/Datos.Entrepreneurs";
import { Products } from "../../Datos/Datos.Products";
import { Car } from "../../Datos/Datos.Car";

export function UserPage() {
    const [entrepreneurs, setEntrepreneurs] = useState(Entrepreneurs);
    const [car, setCar] = useState(Car);
    // const [productPrice, setProductPrice] =([])
    const [products, setProduts] = useState(Products);
    const [page, setPage] = useState(top)
    const [activeHeader, setActiveHeader] = useState(true)
    const [total, setTotal] = useState(0);
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
            {activeHeader ? <HeaderUser Entrepreneur={entrepreneurs[0]} Icon={<IconTop Src={page.icon} />} Data={page} OnClick={() => setPage(Cambio(page))} /> : ""}
            {(() => {
                switch (page.pageName) {
                    case 'Tienda':
                        return <Shop Products={products} seeShoppingCart={() => setPage(shoppingCart)} SeeProduct={(p) => { setProduts(p); setPage(productInfo) }} />;
                    case 'Top':
                        return <Top Entepreneurs={entrepreneurs} />;
                    case 'ProductInfo':
                        return <ProductInfo AgregarCarrito={(producto, nombre) => setCar(addCar(producto, car, nombre))} Product={products} Volver={() => { setPage(tienda); setProduts(Products) }} />;
                    case 'ShoppingCart':
                        return <ShoppingCart
                            Products={products}
                            Increment={(product) => {
                                let p = incrementDecrement(product, true);
                                if (p.cantidad !== product.product.cantidad) {
                                    setCar(addCar(p, car, product.nombre));
                                }
                            }}
                            Decrement={(product) => {
                                let p = incrementDecrement(product, false);
                                if (p) {
                                    setCar(addCar(p, car, product.nombre));
                                } else {
                                    handleDelete(product.product);
                                }
                            }}
                            handleDelete={handleDelete} RemoveAll={() => setCar(null)} seeShoppingCart={() => setPage(tienda)} Car={car} PlaceAnOrder={() => { setActiveHeader(false); setPage(shippingForm); }} />;
                    case 'ShippingForm':
                        return <ShippingForm Cancelar={() => { setActiveHeader(true); setPage(tienda) }} SaveData={() => setPage(confirmOrder)} />;
                    case 'ConfirmOrder':
                        return <ConfirmOrder Cancelar={() => { setActiveHeader(true); setPage(tienda) }} Products={products} PlaceAnOrder={() => { setActiveHeader(false); setPage(purchaseTracking); }} />;
                    case "PurchaseTracking":
                        return <PurchaseTracking Volver={() => { setPage(tienda); setActiveHeader(true) }} />
                    default:
                        return null;
                }
            })()}
        </>
    )
}
