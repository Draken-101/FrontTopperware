import styled from 'styled-components';
import { Button } from '../../../../Components/Atoms/Button';
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
    return(
        <Container>
            <Button Width={"95%"} Color={"rgba(186, 0, 123, 1)"}> Volver </Button>
            <Button Width={"97%"}> Agregar al Carrito </Button>
        </Container>
    )
}