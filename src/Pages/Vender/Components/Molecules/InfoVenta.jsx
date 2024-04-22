import styled from 'styled-components';
import { Label } from '../../../../Components/Atoms/Label';
const Container = styled.div`
    width: 30vw;
    height: calc(100% - 2vw);
    border-inline: .15vw solid rgba(87, 0, 155, 0.3);
    div{
        display: flex;
        width: 100%;
        height: 50%;
    }
    div:nth-child(1){
        height: calc(50% - .13vw);
        border-bottom: .15vw solid rgba(87, 0, 155, 0.3);
    }
    label{
        font-size: 1.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div label:nth-child(1){
        width: calc(70% - .15vw);
    }
    div label:nth-child(2){
        width: 30%;
        border-left: .15vw solid rgba(87, 0, 155, 0.3) ;
    }
`;

export function InfoVenta({ cantidadTotal, ventaTotal }){
    return(
        <Container>
            <div>
                <Label>Cantidad de productos</Label>
                <Label>Total</Label>
            </div>
            <div>
                <Label>{cantidadTotal()}</Label>
                <Label>${ventaTotal()}</Label>
            </div>
        </Container>
    )
}