import styled from 'styled-components';
import { InputSearchBar } from '../Atoms/InputSearchBar';
const Container = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    transition: 0s;
    justify-content: space-between;
    padding: 1vw 1vw 0vw 1vw;
    width: ${props => props.Vender ? '100%' : "97.99vw"};
    height: 3vw;
`;
export function SearchBar({ Buscar, Buttons, SearchButtons, Vender}){
    return(
        <Container Vender={Vender}>
            <InputSearchBar Buscar={Buscar} Btns={SearchButtons}/>
            { Buttons }
        </Container>
    )
}