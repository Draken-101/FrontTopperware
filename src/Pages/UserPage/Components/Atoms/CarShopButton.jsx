
import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";
export function CarShopButton({OnClick}){
    return(
        <ButtonIconHeader 
        Width={'5vw'} 
        NameButton={"Carrito"} 
        IconButton={"/assets/Icons/icons8-carrito-de-compras-64.png"}
        OnClick={OnClick}
        />
    )
}