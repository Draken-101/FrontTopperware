import { Link } from "react-router-dom";
import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";
import { NavHeader } from "../../../../Components/Atoms/NavHeader";

export function NavUserShop(){
    return(
        <NavHeader>
            <ButtonIconHeader path={'/Login'} Width={'3.3vw'}  NameButton={"Salir"} IconButton={"/assets/Icons/salida.png"}/>
        </NavHeader>
    )
}