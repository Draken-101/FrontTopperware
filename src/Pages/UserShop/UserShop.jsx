import { useState } from 'react';
import { IconTop } from '../../Components/Atoms/IconTop';
import { SearchBar } from '../../Components/Molecules/SearchBar';
import { HeaderUser } from '../../Components/Organims/HeaderUser';
import { Btns, tienda } from './Datos/Datos.Valores';
import { useBuscarEntrepreneurs } from '../../CustomiseHooks/useBuscarEntrepreneurs';
import { Shop } from './Components/Organims/Shop';
export function UserShop({ Products, EntrepreneurTop1, ProductsStyles }) {
    const [products, setProducts] = useState([...Products]);
    const [productsBuscar, setProductsBuscar] = useState([...products]);
    const Buscar = (value, type) => {
        if (value === "") {
            setProducts([...productsBuscar]);
            return;
        }
        setProducts(useBuscarEntrepreneurs(value, type, setProductsBuscar));
    }
    return (
        <>
            <HeaderUser Entrepreneur={EntrepreneurTop1} Icon={<IconTop Src={tienda.icon} />} Data={tienda} path={'/UserTop'}/>
            <SearchBar Buscar={Buscar} SearchButtons={Btns} />
            <Shop Products={products} Styles={ProductsStyles} SeeProduct={''} />
        </>
    )
}