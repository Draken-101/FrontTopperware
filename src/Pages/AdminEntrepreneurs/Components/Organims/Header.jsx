import { HeaderAdmin } from "../../../../Components/Organims/HeaderAdmin";

export function Header({Nav}){
    return(
        <HeaderAdmin 
        Title={"Administracion de Emprendedoras"} 
        icon={"src/assets/Icons/icons8-usuario-femenino-en-círculo-96.png"}
        Nav={Nav}
        />
    )
}