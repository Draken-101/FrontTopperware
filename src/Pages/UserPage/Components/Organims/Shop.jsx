import '../../UserPage.css'
import { Card } from '../../../../Components/Molecules/Card';
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CarShopButton } from '../Molecules/CarShopButton';
export function Shop({ OC, SeeP }) {
    const ProductoData = {
        nombre: "Nombre",
        precio: 0
    }
    return (
        <>
            <SearchBar Buttons={<CarShopButton OC={""} />} />
            <div className='ContainerCards'>
                <Card
                    ProductoData={ProductoData}
                    Sell={1}
                    Count={"5"}
                    Gap={"1"}
                    DisableEdit={1}
                    DisableDataExtra={1}
                    DisableClave={1}
                    IsProduct={1}
                    OnClick={SeeP} />
            </div>
        </>
    )
}