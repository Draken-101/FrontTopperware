import styled from 'styled-components';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
    width: 37vw;
    margin: 1vw;
    height: calc(100% - 2vw);
    display: flex;
    flex-direction: column;
    gap: 1vw;
    button{
        font-size: 1.5vw;
        letter-spacing: .5vw;
        height: calc(50% - .5vw);
    }
`;

export function ButtonsControlVentas({DeleteAll}) {
    const navigate = useNavigate();
    return (
        <Container>
            <ButtonPurple onClick={() => navigate('/HistorialVentas')}>
                Historial de ventas
            </ButtonPurple>
            <ButtonPinkRed onClick={() => DeleteAll()}>
                Borrar productos
            </ButtonPinkRed>
        </Container>
    )
}