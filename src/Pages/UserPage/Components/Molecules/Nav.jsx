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
export function Nav({ Data, OC }) {
    return (
        <Container>
            <ButtonIconHeader Data={Data} OC={OC}/>
        </Container>
    )
}