import styled from 'styled-components';
import { ButtonsAndTotal } from '../Molecules/ButtonsAndTotal';
import { ProductShoppingCart } from '../Molecules/ProductShoppingCart';
const Container = styled.div`
    width: calc(100% - 4vw);
    height: calc(100vh - 10.6vw);
    padding: 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ContainerProducts = styled.div`
  
`;
export function ShoppingCart({seeShoppingCart}){
    return(
        <Container>
            <ContainerProducts>
                <ProductShoppingCart/>
            </ContainerProducts>
            <ButtonsAndTotal/>
        </Container>
    )
}