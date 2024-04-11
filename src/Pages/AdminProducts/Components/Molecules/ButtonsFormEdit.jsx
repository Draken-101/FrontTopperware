import { ButtonPinkRed } from "../../../../Components/Atoms/ButtonPinkRed";
import { ButtonAdd } from "../../../../Components/Molecules/ButtonAdd";
import styled from 'styled-components';
const Div = styled.div`
    width: calc(25% - 1vw);
    display: flex;
    justify-content: space-between;
    button{
        border-bottom-left-radius: 0vw;
        border-bottom-right-radius: 0vw;
        background-color: rgba(87, 0, 155, 0.61);
        &:hover{
            filter: drop-shadow(0vw 0vw 0vw rgba(0, 0, 0, 0)) ;
            transform: translate( 0vw, 0vw);
            background-color: rgba(186, 0, 123, 1);
        }
    }
`;
export function ButtonsFormEdit({ handleButtonClick, SeeForm, clickedButton, Volver }) {
    return (
        <Div>
            <ButtonPinkRed onClick={() => Volver()} Height={"100%"} Size={"1.5vw"} type="button">
                Volver
            </ButtonPinkRed>
            <ButtonAdd handleButtonClick={handleButtonClick} SeeForm={SeeForm} clickedButton={clickedButton} />
        </Div>
    )
}