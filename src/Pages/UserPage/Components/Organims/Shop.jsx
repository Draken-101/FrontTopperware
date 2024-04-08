import '../../UserPage.css'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CarShopButton } from '../Molecules/CarShopButton';
import { CardProduct } from '../Molecules/CardProduct';
import styled from 'styled-components';
const Container = styled.div`
    position: relative;
    padding: 1vw 2vw;
    display: flex;
    width: calc(100% - 4vw);
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1vw;
    height: calc(100vh - 8.6vw);
`;
export function Shop({ seeShoppingCart, SeeProduct, Products }) {
    return (
        <Container>
            <SearchBar Buttons={<CarShopButton OnClick={seeShoppingCart} />} />
            <div className='ContainerCards'>
                {
                    Products.map((data, index) => 
                        <CardProduct ProductData={data}  OnClick={SeeProduct}/>
                    )
                }
            </div>
        </Container>
    )
}