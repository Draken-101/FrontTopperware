import styled from 'styled-components';
import { ButtonIconHeader } from '../Atoms/ButtonIconHeader';
const Container = styled.nav`
    background-color: white;
    display: flex;
    justify-content: end;
    align-items: center;
    width: calc( (100% / 3) - 2vw );
    height: 100%;
    padding-right: 2vw;
`;
export function Nav({ Data, path }) {
    return (
        <Container>
            <ButtonIconHeader path={path} Width={'5vw'} NameButton={Data.nameButton} IconButton={Data.iconButton}/>
        </Container>
    )
}