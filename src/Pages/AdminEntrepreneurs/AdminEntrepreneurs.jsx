import { useState } from "react";
import './AdminEntrepreneurs.styl'
import { Header } from "./Components/Organims/Header";
import { NavEntrepreneurs } from "./Components/Molecules/NavEntrepreneurs";
import { CardsEntrepreneurs } from "./Components/Organims/CardsEntrepreneurs";
import { Entrepreneurs } from "./Datos/Datos.Emprendedoras";
export function AdminEntrepreneurs(){
    const [nav, setNav] = useState(<NavEntrepreneurs/>)
    return(
        <>
            <Header Nav={nav}/>
            <div className="ContentAdmin">
                <CardsEntrepreneurs Entrepreneurs={Entrepreneurs}/>
            </div>
        </>
    )
}