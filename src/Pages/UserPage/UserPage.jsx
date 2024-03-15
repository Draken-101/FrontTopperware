import { useState } from "react";
import { IconTop } from "../../Components/Atoms/IconTop";
import { HeaderUser } from "./Components/Organims/HeaderUser";
import { Top } from "./Components/Organims/Top";

export function UserPage(){
    const [page, setPage] = useState(
        {
            data:{
            name:"Tienda",
            icon:"src/assets/Icons/icons8-tienda-96.png"
        },
    })
    const Cambio = () =>{
        if(page.name === "Tienda"){
            setPage(
            {
                data:{
                name:"Top",
                icon:"src/assets/Icons/icons8-corona-96.png"
            }})
            console.log("a")
        } else {
            setPage(
            {
                data:{
                name:"Tienda",
                icon:"src/assets/Icons/icons8-tienda-96.png"
            }})
        }
    }
    return(
        <>
            <HeaderUser Icon={<IconTop/>} Data={page.data} OC={Cambio}/>
            <Top/>
        </>
    )
}
