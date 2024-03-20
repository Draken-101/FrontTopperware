
import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";
export function CarShopButton({OnClick}){
    return(
        <ButtonIconHeader Data={{
            name:"Carrito",
            icon:"src/assets/Icons/icons8-carrito-de-compras-64.png"
        }} 
        OnClick={OnClick}/>
    )
}