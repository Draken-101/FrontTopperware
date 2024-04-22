import styled from 'styled-components';
import { Label } from '../Atoms/Label';
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: white;
    align-items: center;
    width: calc( (100% / 3 ) - .3vw);
    height: 100%;
    border-left: 0.15vw solid rgba(87, 0, 155, 0.61);
    border-right: 0.15vw solid rgba(87, 0, 155, 0.61);
`;
export function IconPage({Icon}) {
    return (
        <Container>
            <Label
                Size={"2vw"}
                Justify={"center"}
                Weight={"700"}
                LetterSpacing={".2vw"}
            >
                Unidad Virgo
            </Label>
            { Icon }
        </Container>
    )
}