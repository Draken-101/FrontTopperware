
import { CardTop } from '../Molecules/CardTop';
import styled from 'styled-components';
const Container = styled.div`
    width: calc(100% - 2vw);
    margin:1vw 1vw;
    display: grid ;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1vw;
    grid-template-rows: repeat(auto-fill, 19vw);
    justify-items: center;
    align-items: end;
    height: fit-content;
    max-height: calc(100% - 4vw);
    overflow-y: scroll;
`;
export function Top({ Entepreneurs }){
    return(
        <Container>
                {
                    Entepreneurs?.map((data) => 
                        <CardTop EntrepreneurData={data}/>
                    )
                }
        </Container>
    )
}