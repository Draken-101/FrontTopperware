import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";
import { NavHeaderAdmin } from "../../../../Components/Atoms/NavHeaderAdmin";

export function NavEntrepreneurs(){
    return(
        <NavHeaderAdmin>
            <ButtonIconHeader Width={'6vw'} NameButton={"Vender"} IconButton={"src/assets/Icons/icons8-ventas-96.png"}/>
            <ButtonIconHeader Width={'6.2vw'}  NameButton={"Pedidos"} IconButton={"src/assets/Icons/icons8-historial-de-pedidos-96.png"}/>
            <ButtonIconHeader Width={'4.5vw'}  NameButton={"Metas"} IconButton={"src/assets/Icons/icons8-medalla-primer-lugar-96.png"}/>
            <ButtonIconHeader Width={'12.1vw'}  NameButton={"Emprendedoras"} IconButton={"src/assets/Icons/icons8-usuario-femenino-en-círculo-96.png"}/>
            <ButtonIconHeader Width={'3.3vw'}  NameButton={"Salir"} IconButton={"src/assets/Icons/salida.png"}/>
        </NavHeaderAdmin>
    )
}