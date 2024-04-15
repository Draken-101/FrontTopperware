import { ButtonIconHeader } from "../../../../Components/Atoms/ButtonIconHeader";

export function CarShopButton({ path }) {
    return (
        <ButtonIconHeader
            path={path}
            Width={'5vw'}
            NameButton={"Carrito"}
            IconButton={"/assets/Icons/icons8-carrito-de-compras-64.png"}
        />
    )
}