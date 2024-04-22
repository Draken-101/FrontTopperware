import { ButtonPinkRed } from "../../../../Components/Atoms/ButtonPinkRed";
import { ButtonAdd } from "../../../../Components/Molecules/ButtonAdd";
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${props => props.open ? 23.5 : 3}vw;
    .ButtonsAdminControlsForm{
        width: ${props => props.open ? 3 : 0}vw;
        overflow: hidden;
        padding: ${props => props.open ? 1 : 0}vw;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        &:hover{
            filter: drop-shadow(0vw .5vw 0vw rgba(0, 0, 0, 0.3)) ;
            transform: translate( 0vw, -.5vw);
        }
    }
`;
export function ButtonsAdminControls({ SeeFormAdd, handleButtonClick, clickedButton, closeForm, open }) {
    return (
        <Container open={open}>
            <ButtonPinkRed className="ButtonsAdminControlsForm" open={!open} onClick={() => closeForm()}>
                <CloseIcon fontSize="medium"/>
            </ButtonPinkRed>
            <ButtonAdd
                openForm={open}
                handleButtonClick={handleButtonClick}
                SeeFormAdd={SeeFormAdd}
                clickedButton={clickedButton} />
        </Container>
    )
}