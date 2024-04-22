import { useNavigate } from "react-router-dom";
import { ButtonPinkRed } from "../../../../Components/Atoms/ButtonPinkRed";
import { ButtonAdd } from "../../../../Components/Molecules/ButtonAdd";
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
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
    .Volver{
        width: ${props => props.open ? 7 : 0}vw;
    }
`;
export function ButtonsFormEdit({ handleButtonClick, SeeFormAdd, clickedButton, open, closeForm }) {
    const navigate = useNavigate()
    return (
        <Container open={open}>
            <ButtonPinkRed className="ButtonsAdminControlsForm" open={!open} onClick={() => closeForm()}>
                <CloseIcon fontSize="medium"/>
            </ButtonPinkRed>
            <ButtonPinkRed className="ButtonsAdminControlsForm Volver" open={!open} onClick={() => navigate('/AdminProducts')} Height={"100%"} Size={"1.5vw"} type="button">
                Volver
            </ButtonPinkRed>
            <ButtonAdd
                openForm={open}
                handleButtonClick={handleButtonClick}
                SeeFormAdd={SeeFormAdd}
                clickedButton={clickedButton} />
        </Container>
    )
}