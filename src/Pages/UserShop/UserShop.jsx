import { useEffect, useState } from 'react';
import { IconTop } from '../../Components/Atoms/IconTop';
import { SearchBar } from '../../Components/Molecules/SearchBar';
import { HeaderUser } from '../../Components/Organims/HeaderUser';
import { BtnsUserShop, tienda } from './Datos/Datos.Valores';
import { Shop } from './Components/Organims/Shop';
import { CarShopButton } from './Components/Atoms/CarShopButton';
import { buscarProduct, getProducts } from '../../Datos/Datos.Products';
import { getEntrepreneurs } from '../../Datos/Datos.Entrepreneurs';
import { getStyles } from '../../Datos/Datos.Styles';
import { useParams } from 'react-router-dom';
export function UserShop() {
    const [products, setProducts] = useState([]);
    const [productsBuscar, setProductsBuscar] = useState([]);
    const [entrepreneurSinging, setEntrepreneurSinging] = useState({});
    const [styles, setStyles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedEntrepreneurs = await getEntrepreneurs();
                const userSinging = fetchedEntrepreneurs.find(entrepreneur => entrepreneur.top === 1);
                setEntrepreneurSinging(userSinging);
                const fetchedStyles = await getStyles();
                const fetchedProducts = await getProducts();
                setStyles(fetchedStyles)
                setEntrepreneurTop1({ ...topEntrepreneur });
                setProductsBuscar(fetchedProducts);
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <HeaderUser Entrepreneur={entrepreneurSinging} Icon={<IconTop Src={tienda.icon} />} Data={tienda} path={'/UserTop'} />
            <SearchBar Buscar={(value, type) => setProducts(buscarProduct(value, type, productsBuscar))} SearchButtons={BtnsUserShop} Buttons={<CarShopButton path={'/ShoppingCar'} />} />
            <Shop Products={products} Styles={styles} />
        </>
    )
}