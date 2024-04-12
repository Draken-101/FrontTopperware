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
export function Shop({ Styles, seeShoppingCart, SeeProduct, Products }) {

    return (
        <Container>
            <div className='ContainerCards'>
                {
                    Products.map((data, index) => 
                        <CardProduct ProductData={data} Existencias={Styles.reduce((S, total) => {
                            if(Styles.getClave() === S.getClave()){
                                return total + S.cantidad;
                            }
                            return total;
                        }, 0)}  OnClick={SeeProduct}/>
                    )
                }
            </div>
        </Container>
    )
}