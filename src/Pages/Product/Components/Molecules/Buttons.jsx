import styled from 'styled-components';
import {ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import { useNavigate } from 'react-router-dom';
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
export function Buttons(){
    const navigate = useNavigate();
    return(
        <Container>
            <ButtonPinkRed onClick={() => navigate('/UserShop')} Width={"95%"} type="button" > Volver </ButtonPinkRed>
            <ButtonPurple Width={"97%"} type='submit'> Agregar al Carrito </ButtonPurple>
        </Container>
    )
}