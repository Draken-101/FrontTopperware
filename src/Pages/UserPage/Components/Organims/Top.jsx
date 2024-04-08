import '../../UserPage.css'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CardTop } from '../Molecules/CardTop';
import styled from 'styled-components';
const Container = styled.div`
    width: calc(100% - 4vw);
    padding: 1vw 2vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1vw;
    height: fit-content;
`;
export function Top({ Entepreneurs }){
    return(
        <Container>
            <SearchBar/>
            <div className='ContainerCards'>
                {
                    Entepreneurs.map((data, index) => 
                        <CardTop EntrepreneurData={data}/>
                    )
                }
            </div>
        </Container>
    )
}