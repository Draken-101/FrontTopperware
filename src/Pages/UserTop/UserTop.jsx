import { useState } from 'react';
import { IconTop } from '../../Components/Atoms/IconTop';
import { SearchBar } from '../../Components/Molecules/SearchBar';
import { HeaderUser } from '../../Components/Organims/HeaderUser';
import { Top } from './Components/Organims/Top';
import { Btns, tienda } from './Datos/Datos.Valores';
import { buscarEntrepreneur } from '../../Datos/Datos.Entrepreneurs';
export function UserTop({ Entrepreneurs, EntrepreneurTop1 }) {
    const [entrepreneurs, setEntrepreneurs] = useState([...Entrepreneurs]);
    return (
        <>
            <HeaderUser Entrepreneur={EntrepreneurTop1} Icon={<IconTop Src={tienda.icon} />} Data={tienda} path={'/UserShop'}/>
            <SearchBar Buscar={(value, type) => setEntrepreneurs(buscarEntrepreneur(value, type, Entrepreneurs))} SearchButtons={Btns} />
            <Top Entepreneurs={entrepreneurs} />
        </>
    )
}