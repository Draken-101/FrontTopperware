import { useEffect, useState } from 'react';
import { IconTop } from '../../Components/Atoms/IconTop';
import { SearchBar } from '../../Components/Molecules/SearchBar';
import { HeaderUser } from '../../Components/Organims/HeaderUser';
import { Top } from './Components/Organims/Top';
import { Btns, tienda } from './Datos/Datos.Valores';
import { buscarEntrepreneur, getEntrepreneurs } from '../../Datos/Datos.Entrepreneurs';
export function UserTop() {
    const [entrepreneurs, setEntrepreneurs] = useState([]);
    const [EntrepreneurTop1, setEntrepreneurTop1] = useState({});
    let entrepreneursBuscar;
    useEffect(() => {
        const fetchData = async () => {
            try {
                entrepreneursBuscar = await getEntrepreneurs();
                setEntrepreneurTop1(entrepreneursBuscar.find((entrepreneur) => entrepreneur.top == 1));
                setEntrepreneurs(entrepreneursBuscar);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <HeaderUser Entrepreneur={EntrepreneurTop1} Icon={<IconTop Src={tienda.icon} />} Data={tienda} path={'/UserShop'}/>
            <SearchBar Buscar={(value, type) => setEntrepreneurs(buscarEntrepreneur(value, type, entrepreneursBuscar))} SearchButtons={Btns} />
            <Top Entepreneurs={entrepreneurs} />
        </>
    )
}