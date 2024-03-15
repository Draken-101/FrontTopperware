import styled from 'styled-components';
import { InputSearchBar } from '../Atoms/InputSearchBar';
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3vw;
`;
export function SearchBar({Buttons}){
    return(
        <Container>
            <InputSearchBar/>
            { Buttons }
        </Container>
    )
}