import styled from 'styled-components';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { Label } from '../../../../Components/Atoms/Label';
const Container = styled.div`
        border: .15vw solid rgba(87, 0, 155, 0.61);
        display: flex;
        flex-wrap: wrap;
        background-color: rgba(255, 247, 243, 1);
        margin: auto;
        align-items: center;
        justify-content: space-evenly;
        width: 35vw;
        height: 20vh;
        button{
            cursor: pointer;
            width: 46%;
            height: 5vw;
        }
        label{
            width: calc(100% - 2vw);
            height: 4vw;
            margin-inline: 1vw;
            justify-content: center;
            align-items: center;
            border-bottom: .15vw solid rgba(87, 0, 155, 0.61);
        }
    
`;
export function ConfirmDelete({ DeleteAll }){
    return(
            <Container>
                <Label>
                    Borrar los productos?
                </Label>
                <ButtonPinkRed onClick={() => DeleteAll(true)}>
                    Aceptar
                </ButtonPinkRed>
                <ButtonPurple onClick={() => DeleteAll(false)}>
                    Cancelar
                </ButtonPurple>
            </Container>
    )
}