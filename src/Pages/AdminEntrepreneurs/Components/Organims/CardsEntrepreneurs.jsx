import styled from 'styled-components';
import './CardsEntrepreneurs.styl'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CardEntrepreneur } from '../Molecules/CardEntrepreneur';
const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export function CardsEntrepreneurs({ Entrepreneurs }){
    return (
        <Container>
            <SearchBar/>
            <div className='ContainerCardsAdminEntrepreneurs'>
                {
                    Entrepreneurs.map((data, index) => 
                        <CardEntrepreneur EntrepreneurData={data} />
                    )
                }
            </div>
        </Container>
    );
}
