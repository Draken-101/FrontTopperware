import { useState } from "react";
import { IconTop } from "../../Components/Atoms/IconTop";
import { HeaderUser } from "./Components/Organims/HeaderUser";
import { Top } from "./Components/Organims/Top";
import { Shop } from "./Components/Organims/Shop";
import { Cambio, Valor, Tienda, Switch } from "./Functions";
import { ProductInfo } from "./Components/Organims/ProductInfo";
import { ShoppingCart } from "./Components/Organims/ShoppingCart";
export function UserPage() {
    const [page, setPage] = useState(Valor)
    const [seeProduct, setSeeProduct] = useState(false)
    const [seeShoppingCart, setSeeShoppingCart] = useState(false)
    return (
        <>
            <HeaderUser Icon={<IconTop Src={page.name === "Tienda" ? "src/assets/Icons/icons8-corona-96.png" : seeShoppingCart ? "src/assets/Icons/icons8-carrito-de-compras-64.png" : "src/assets/Icons/icons8-tienda-96.png"} />} Data={page} OnClick={() => { setPage(Cambio(page)); setSeeProduct(false); setSeeShoppingCart(false)}} />
            {

            }
            {
                seeProduct ?
                    <ProductInfo Volver={() => { setSeeProduct(false); setPage(Tienda) }} />
                    :
                    seeShoppingCart ?
                        <ShoppingCart seeShoppingCart={() => setSeeShoppingCart(Switch(seeShoppingCart))}/>
                        :
                        <div className="Container">{
                            page.name === "Top" ? <Shop seeShoppingCart={() => setSeeShoppingCart(Switch(seeShoppingCart))} SeeProduct={() => setSeeProduct(Switch(seeProduct))} /> : <Top />
                        }</div>
            }
        </>
    )
}
