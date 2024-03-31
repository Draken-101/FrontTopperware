import styled from 'styled-components';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: calc(13% - .60vw);
    button{
        padding: .5vw;
        letter-spacing: .3vw;
    }
`;
export default function ButtonsOrder({Cancelar, PlaceAnOrder}){
    return(
        <Container>
            <ButtonPinkRed onClick={Cancelar} Width={"45%"}> Cancelar </ButtonPinkRed>
            <ButtonPurple onClick={PlaceAnOrder} Width={"50%"}> Hacer Pedido </ButtonPurple>
        </Container>
    )
}