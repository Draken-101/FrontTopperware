import '../../UserPage.css'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CardTop } from '../Molecules/CardTop';
import styled from 'styled-components';
const Container = styled.div`
    padding: 1vw 2vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1vw;
    height: calc(100vh - 9.6vw);
`;
export function Top(){
    return(
        <Container>
            <SearchBar/>
            <div className='ContainerCards'>
                <CardTop/>
            </div>
        </Container>
    )
}