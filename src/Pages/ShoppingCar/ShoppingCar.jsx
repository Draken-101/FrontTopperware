import { useEffect, useState } from "react";
import { IconTop } from "../../Components/Atoms/IconTop";
import { ContainerCar } from "./Components/Organims/ContainerCar";
import { getEntrepreneurs } from "../../Datos/Datos.Entrepreneurs";
import { HeaderUser } from "../../Components/Organims/HeaderUser";
import { tienda } from "./Datos/Datos.Functions";

export function ShoppingCar() {
    const [car, setCar] = useState([]);
    const [productsBuscar, setProductsBuscar] = useState([]);
    const [entrepreneurTop1, setEntrepreneurTop1] = useState({});
    const [styles, setStyles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedEntrepreneurs = await getEntrepreneurs();
                const topEntrepreneur = fetchedEntrepreneurs.find(entrepreneur => entrepreneur.top === 1);
                setEntrepreneurTop1({...topEntrepreneur});
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <HeaderUser Entrepreneur={entrepreneurTop1} Icon={<IconTop Src={tienda.icon} />} Data={tienda} path={'/UserTop'}/>
            <ContainerCar
                handleDelete={''}
                RemoveAll={''}
                seeShoppingCart={''}
                Car={car}
                PlaceAnOrder={''}
                Increment={''}
                Decrement={''}
            />
        </>
    )
}
