import styled from 'styled-components';
import { InputSearchBar } from '../Atoms/InputSearchBar';
const Container = styled.div`
    display: flex;
    transition: 0s;
    justify-content: space-between;
    padding: 1vw 1vw 0vw 1vw;
    width: 97.99vw;
    height: 3vw;
`;
export function SearchBar({ Buscar, Buttons, SearchButtons }){
    return(
        <Container>
            <InputSearchBar Buscar={Buscar} Btns={SearchButtons}/>
            { Buttons }
        </Container>
    )
}