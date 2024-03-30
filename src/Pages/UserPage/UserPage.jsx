import { useEffect, useState } from "react";
import { IconTop } from "../../Components/Atoms/IconTop";
import { HeaderUser } from "./Components/Organims/HeaderUser";
import { Top } from "./Components/Organims/Top";
import { Shop } from "./Components/Organims/Shop";
import { Cambio, tienda, Switch, top, productInfo, shoppingCart, shippingForm, confirmOrder } from "./Functions";
import { ProductInfo } from "./Components/Organims/ProductInfo";
import { ShoppingCart } from "./Components/Organims/ShoppingCart";
import { Products } from "./Datos/Datos.Products";
import { ShippingForm } from "./Components/Organims/ShippingForm";
import { ConfirmOrder } from "./Components/Organims/ConfirmOrder";
export function UserPage() {
    const [page, setPage] = useState(top)
    const [activeHeader, setActiveHeader] = useState(true)
    return (
        <>
            {activeHeader ? <HeaderUser Icon={<IconTop Src={page.icon} />} Data={page} OnClick={() => setPage(Cambio(page))} /> : ""}
            {(() => {
                switch (page.pageName) {
                    case 'Tienda':
                        return <Shop seeShoppingCart={() => setPage(shoppingCart)} SeeProduct={() => setPage(productInfo)} />;
                    case 'Top':
                        return <Top />;
                    case 'ProductInfo':
                        return <ProductInfo Volver={() => setPage(tienda)} />;
                    case 'ShoppingCart':
                        return <ShoppingCart seeShoppingCart={() => setPage(tienda)} Products={Products} PlaceAnOrder={()=> { setActiveHeader(false); setPage(shippingForm); }}/>;
                    case 'ShippingForm':
                        return <ShippingForm Cancelar={() => { setActiveHeader(true); setPage(tienda)}} SaveData={() => setPage(confirmOrder)}/>;
                    case 'ConfirmOrder':
                        return <ConfirmOrder Cancelar={() => { setActiveHeader(true); setPage(tienda)}} Products={Products}/>;
                    default:
                        return null;
                }
            })()}
        </>
    )
}
