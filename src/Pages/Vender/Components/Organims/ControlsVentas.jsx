import styled from 'styled-components';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { InfoVenta } from '../Molecules/InfoVenta';
import { ButtonsControlVentas } from '../Molecules/ButtonsControlVentas';
const Container = styled.div`
    background-color: rgba(254, 238, 255, 1);
    width: 98vw;
    margin: 1vw;
    margin-top: 0vw;
    height: 9.4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .VenderBtn{
        letter-spacing: .5vw;
        font-size: 4vw;
        width: 27vw;
        height: calc( 100% - 2vw);
        margin: 1vw;
    }
`;

export function ControlsVentas({ DeleteAll, cantidadTotal, ventaTotal }) {
    return(
        <Container>
            <ButtonsControlVentas DeleteAll={DeleteAll}/>
            <InfoVenta cantidadTotal={cantidadTotal} ventaTotal={ventaTotal}/>
            <ButtonPurple className='VenderBtn'>
                Vender
            </ButtonPurple>
        </Container>
    )
}