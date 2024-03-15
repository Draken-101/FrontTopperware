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
            {
                Data.map((data) => {
                    return (
                        <ButtonIcon onClick={OC}>
                            <Label>
                                {data.name ? data.name : "Name none &"}
                            </Label>
                            <img src={data.icon ? data.icon : ""}/>
                        </ButtonIcon>
                    )
                })
            }
        </Container>
    )
}