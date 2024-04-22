import styled from 'styled-components';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { Label } from '../../../../Components/Atoms/Label';
const Container = styled.div`
    position: absolute;
    display: flex;
    overflow: hidden;
    top: ${props => props.open ? 0 : 50}%;
    left: ${props => props.open ? 0 : 50}%;
    width: ${props => props.open ? 100 : 0}vw;
    height: ${props => props.open ? 100 : 0}vh;
    background-color: #000000a8;
    display: ${props => props.open ? 1 : 0};
    z-index: ${props => props.open ? 100 : 0};
    transform: scale(${props => props.open ? 1 : 0});
`;
export function Alert({ open, Content }){
    return(
        <Container open={open}>
            { Content }
        </Container>
    )
}