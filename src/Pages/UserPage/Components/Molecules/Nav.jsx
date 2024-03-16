import styled from 'styled-components';
import { ButtonIcon } from '../../../../Components/Atoms/ButtonIcon';
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
            <ButtonIcon onClick={OC}>
                <Label>
                    {Data.name ? Data.name : "Name none &"}
                </Label>
                <img src={Data.icon ? Data.icon : ""} />
            </ButtonIcon>
        </Container>
    )
}