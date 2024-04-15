import { Link } from "react-router-dom";
import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";
import { NavHeaderAdmin } from "../../../../Components/Atoms/NavHeaderAdmin";

export function NavEntrepreneurs(){
    return(
        <NavHeaderAdmin>
            <ButtonIconHeader path={''} Width={'6vw'} NameButton={"Vender"} IconButton={"/assets/Icons/icons8-ventas-96.png"}/>
            <ButtonIconHeader path={''} Width={'6.2vw'}  NameButton={"Pedidos"} IconButton={"/assets/Icons/icons8-historial-de-pedidos-96.png"}/>
            <ButtonIconHeader path={''} Width={'4.5vw'}  NameButton={"Metas"} IconButton={"/assets/Icons/icons8-medalla-primer-lugar-96.png"}/>
            <ButtonIconHeader path={'/AdminProducts'} Width={'7.7vw'} NameButton={"Productos"} IconButton={"/assets/Icons/icons8-productos-96.png"}/>
            <ButtonIconHeader path={'/Login'} Width={'3.3vw'}  NameButton={"Salir"} IconButton={"/assets/Icons/salida.png"}/>
        </NavHeaderAdmin>
    )
}