import styled from 'styled-components';
import { ButtonIconHeader } from '../../../../Components/Atoms/ButtonIconHeader';
import { Label } from '../../../../Components/Atoms/Label';
const Container = styled.nav`
    display: flex;
    justify-content: end;
    align-items: center;
    width: calc( (100% / 3) - 2vw );
    height: 100%;
    padding-right: 2vw;
`;
export function Nav({ Data, OnClick }) {
    return (
        <Container>
            <ButtonIconHeader NameButton={Data.nameButton} IconButton={Data.iconButton} OnClick={OnClick}/>
        </Container>
    )
}