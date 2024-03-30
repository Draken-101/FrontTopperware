
import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";
export function CarShopButton({OnClick}){
    return(
        <ButtonIconHeader Data={{
            nameButton:"Carrito",
            iconButton:"src/assets/Icons/icons8-carrito-de-compras-64.png"
        }} 
        OnClick={OnClick}/>
    )
}