import '../../UserPage.css'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CarShopButton } from '../Molecules/CarShopButton';
import { CardProduct } from '../Molecules/CardProduct';
export function Shop({ seeShoppingCart, SeeProduct }) {
    const ProductoData = {
        nombre: "Nombre",
        precio: 0
    }
    return (
        <>
            <SearchBar Buttons={<CarShopButton OnClick={seeShoppingCart} />} />
            <div className='ContainerCards'>
                <CardProduct  OnClick={SeeProduct}/>
            </div>
        </>
    )
}