
import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";
export function CarShopButton({OnClick}){
    return(
        <ButtonIconHeader 
        NameButton={"Carrito"} 
        IconButton={"src/assets/Icons/icons8-carrito-de-compras-64.png"}
        OnClick={OnClick}
        />
    )
}