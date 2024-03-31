import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";
import { NavHeaderAdmin } from "../../../../Components/Atoms/NavHeaderAdmin";

export function NavEntrepreneurs(){
    return(
        <NavHeaderAdmin>
            <ButtonIconHeader NameButton={"Vender"} IconButton={"src/assets/Icons/icons8-ventas-96.png"}/>
            <ButtonIconHeader NameButton={"Pedidos"} IconButton={"src/assets/Icons/icons8-historial-de-pedidos-96.png"}/>
            <ButtonIconHeader NameButton={"Metas"} IconButton={"src/assets/Icons/icons8-medalla-primer-lugar-96.png"}/>
            <ButtonIconHeader NameButton={"Productos"} IconButton={"src/assets/Icons/icons8-productos-96.png"}/>
            <ButtonIconHeader NameButton={"Salir"} IconButton={"src/assets/Icons/salida.png"}/>
        </NavHeaderAdmin>
    )
}