import styled from 'styled-components';
import './CardsEntrepreneurs.styl'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CardEntrepreneur } from '../Molecules/CardEntrepreneur';
const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export function CardsEntrepreneurs({Editar, Entrepreneurs, handleButtonClick, clickedButton, Buscar }){
    return (
        <Container>
            <SearchBar Buscar={Buscar}/>
            <div className='ContainerCardsAdminEntrepreneurs'>
                {
                    Entrepreneurs.map((data, index) => 
                        <CardEntrepreneur Editar={Editar} EntrepreneurData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton}/>
                    )
                }
            </div>
        </Container>
    );
}
