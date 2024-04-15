import { useState } from 'react';
import { IconTop } from '../../Components/Atoms/IconTop';
import { SearchBar } from '../../Components/Molecules/SearchBar';
import { HeaderUser } from '../../Components/Organims/HeaderUser';
import { Btns, tienda } from './Datos/Datos.Valores';
import { Shop } from './Components/Organims/Shop';
import { CarShopButton } from './Components/Atoms/CarShopButton';
import { buscarProduct } from '../../Datos/Datos.Products';
export function UserShop({ Products, EntrepreneurTop1, ProductsStyles }) {
    const [products, setProducts] = useState([...Products]);
    return (
        <>
            <HeaderUser Entrepreneur={EntrepreneurTop1} Icon={<IconTop Src={tienda.icon} />} Data={tienda} path={'/UserTop'}/>
            <SearchBar Buscar={( value, type ) => setProducts(buscarProduct( value, type, Products ))} SearchButtons={Btns} Buttons={<CarShopButton path={'/CarShop'} />}/>
            <Shop Products={products} Styles={ProductsStyles} />
        </>
    )
}