
import styled from 'styled-components';
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CardTop } from '../../../UserPage/Components/Molecules/CardTop';
const Container = styled.div`
    padding: 1vw 2vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1vw;
    height: calc(100vh - 9.6vw);
`;
export function ContentTop(){
    return(
        <Container>
            <SearchBar/>
            <div className='ContainerCards'>
                <CardTop/>
            </div>
        </Container>
    )
}