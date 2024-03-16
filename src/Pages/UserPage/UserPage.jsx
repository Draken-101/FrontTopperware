import { useState } from "react";
import { IconTop } from "../../Components/Atoms/IconTop";
import { HeaderUser } from "./Components/Organims/HeaderUser";
import { Top } from "./Components/Organims/Top";

export function UserPage(){
    const [page, setPage] = useState({
            name:"Tienda",
            icon:"src/assets/Icons/icons8-tienda-96.png"
        }
    )
    const Cambio = () =>{
        if(page.name === "Tienda"){
            setPage(
            {
                name:"Top",
                icon:"src/assets/Icons/icons8-corona-96.png"
            })
            console.log("a")
        } else {
            setPage({
                name:"Tienda",
                icon:"src/assets/Icons/icons8-tienda-96.png"
            })
        }
    }
    return(
        <>
            <HeaderUser Icon={ <IconTop Src={ page.name === "Tienda" ? "src/assets/Icons/icons8-corona-96.png" : "src/assets/Icons/icons8-tienda-96.png"}/> } Data={page} OC={Cambio}/>
            <Top/>
        </>
    )
}
