import styled from 'styled-components';
import {ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
const Container = styled.div`
    display: grid !important;
    grid-template-columns: 35% 65%;
    grid-template-rows: 100%;
    align-items: center;
    justify-items: center;
    width: calc(100% - 2vw);
    display: flex;
    margin: 0vw 1vw 0vw 1vw;
    height: 15%;
    border-top: 0.15vw solid rgba(136, 0, 139, 0.22);
`;
export function Buttons({ Volver, AgregarCarrito }){
    return(
        <Container>
            <ButtonPinkRed onClick={Volver} Width={"95%"} > Volver </ButtonPinkRed>
            <ButtonPurple onClick={AgregarCarrito} Width={"97%"}> Agregar al Carrito </ButtonPurple>
        </Container>
    )
}