import { useState } from "react";
import { HeaderUser } from "../../Components/Organims/HeaderUser";
import { Info } from "./Components/Organims/Info";
import { useParams } from "react-router-dom";
import { IconTop } from "../../Components/Atoms/IconTop";
import { tienda } from "./Datos/Datos.Valores";

export function ProductInfo({ AgregarCarrito, EntrepreneurTop1, Products, Styles }) {
    let { claveProduct } = useParams()
    return (
        <>
            <HeaderUser Entrepreneur={EntrepreneurTop1} Icon={<IconTop Src={tienda.icon} />} Data={tienda} path={'/UserTop'} />
            <Info
                AgregarCarrito={AgregarCarrito}
                Styles={Styles.filter((style) => style.getClave() === claveProduct)}
                Product={Products.filter((product) => product.clave === claveProduct)[0]} />
        </>
    )
}