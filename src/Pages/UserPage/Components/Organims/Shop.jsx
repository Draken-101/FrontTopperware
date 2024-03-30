import '../../UserPage.css'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CarShopButton } from '../Molecules/CarShopButton';
import { CardProduct } from '../Molecules/CardProduct';
import styled from 'styled-components';
const Container = styled.div`
    padding: 1vw 2vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1vw;
    height: calc(100vh - 8.6vw);
`;
export function Shop({ seeShoppingCart, SeeProduct }) {
    const ProductoData = {
        nombre: "Nombre",
        precio: 0
    }
    return (
        <Container>
            <SearchBar Buttons={<CarShopButton OnClick={seeShoppingCart} />} />
            <div className='ContainerCards'>
                <CardProduct  OnClick={SeeProduct}/>
            </div>
        </Container>
    )
}