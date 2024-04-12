import { useState } from 'react';
import { IconTop } from '../../Components/Atoms/IconTop';
import { SearchBar } from '../../Components/Molecules/SearchBar';
import { HeaderUser } from '../../Components/Organims/HeaderUser';
import { Top } from './Components/Organims/Top';
import { Btns, tienda } from './Datos/Datos.Valores';
import { useBuscarEntrepreneurs } from '../../CustomiseHooks/useBuscarEntrepreneurs';
export function UserTop({ Entrepreneurs, EntrepreneurTop1 }) {
    const [entrepreneurs, setEntrepreneurs] = useState([...Entrepreneurs]);
    const [entrepreneursBuscar, setEntrepreneursBuscar] = useState([...entrepreneurs]);
    const Buscar = (value, type) => {
        if (value === "") {
            setEntrepreneurs([...entrepreneursBuscar]);
            return;
        }
        setEntrepreneurs(useBuscarEntrepreneurs(value,type, entrepreneursBuscar));
    }
    return (
        <>
            <HeaderUser Entrepreneur={EntrepreneurTop1} Icon={<IconTop Src={tienda.icon} />} Data={tienda} path={'/UserShop'}/>
            <SearchBar Buscar={Buscar} SearchButtons={Btns} />
            <Top Entepreneurs={entrepreneurs} />
        </>
    )
}