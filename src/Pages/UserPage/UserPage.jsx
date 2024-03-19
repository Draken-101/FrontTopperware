import { useState } from "react";
import { IconTop } from "../../Components/Atoms/IconTop";
import { HeaderUser } from "./Components/Organims/HeaderUser";
import { Top } from "./Components/Organims/Top";
import { Shop } from "./Components/Organims/Shop";
import { Cambio, Valor, ProductSwitch } from "./Functions";
import { ProductInfo } from "./Components/Organims/ProductInfo";
export function UserPage() {
    const [page, setPage] = useState(Valor)
    const [seeProduct, setSeeProduct] = useState(false)
    return (
        <>
            <HeaderUser Icon={<IconTop Src={page.name === "Tienda" ? "src/assets/Icons/icons8-corona-96.png" : "src/assets/Icons/icons8-tienda-96.png"} />} Data={page} OC={() => {setPage(Cambio(page)); setSeeProduct(false)}} />
            {
                seeProduct ?
                <ProductInfo/>
                :
                <div className="Container">{
                    page.name === "Top" ? <Shop SeeP={()=> setSeeProduct(ProductSwitch(seeProduct))}/> : <Top />
                }</div>
            }
        </>
    )
}
