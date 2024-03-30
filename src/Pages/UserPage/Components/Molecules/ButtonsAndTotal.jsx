import styled from 'styled-components';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { TotalProducts } from '../Atoms/TotalProducts';
const Container = styled.div`
    width: 100%;
    height: 6.7vw;
    display: grid;
    background-color: rgba(255, 247, 243, 1);
    grid-template-columns: calc( 30% - 1vw)  calc( 20% - 1vw) calc( 30% - 1vw) 20%;
    grid-template-rows: 100%;
    justify-content: space-around;
    align-items: center;
    border-top: 0.15vw solid rgba(136, 0, 139, 0.22);
    border-bottom: 0.15vw solid rgba(136, 0, 139, 0.22);
    button{
        width: 100%;
        height: 70%;
        letter-spacing: .3vw;
    }
`;
export function ButtonsAndTotal({Volver, Total, RemoveAll, PlaceAnOrder}){
    return(
        <Container>
            <ButtonPinkRed onClick={RemoveAll}> Vaciar carrito </ButtonPinkRed>
            <ButtonPinkRed onClick={Volver}> Volver </ButtonPinkRed>
            <ButtonPurple onClick={PlaceAnOrder}> Hacer Pedido </ButtonPurple>
            <TotalProducts Total={Total}/>
        </Container>
    )
}