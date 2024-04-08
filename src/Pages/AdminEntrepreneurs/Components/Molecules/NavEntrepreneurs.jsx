import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";
import { NavHeaderAdmin } from "../../../../Components/Atoms/NavHeaderAdmin";

export function NavEntrepreneurs(){
    return(
        <NavHeaderAdmin>
            <ButtonIconHeader Width={'6vw'} NameButton={"Vender"} IconButton={"src/assets/Icons/icons8-ventas-96.png"}/>
            <ButtonIconHeader Width={'6.5vw'} NameButton={"Pedidos"} IconButton={"src/assets/Icons/icons8-historial-de-pedidos-96.png"}/>
            <ButtonIconHeader Width={'5vw'} NameButton={"Metas"} IconButton={"src/assets/Icons/icons8-medalla-primer-lugar-96.png"}/>
            <ButtonIconHeader Width={'7.7vw'} NameButton={"Productos"} IconButton={"src/assets/Icons/icons8-productos-96.png"}/>
            <ButtonIconHeader Width={'3.3vw'} NameButton={"Salir"} IconButton={"src/assets/Icons/salida.png"}/>
        </NavHeaderAdmin>
    )
}