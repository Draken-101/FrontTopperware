import styled from 'styled-components';
import './CardsProducts.styl'
import { SearchBar } from '../../../../Components/Molecules/SearchBar';
import { CardProduct } from '../Molecules/CardProduct';
import { CardProductStyle } from '../Molecules/CardProductStyle';
const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;
export function CardsProducts({ProductStyles, Editar, Products, handleButtonClick, clickedButton, SeeProductStyles }) {
    return (
        <Container>
            <SearchBar />
            <div className='ContainerCardsAdminEntrepreneurs'>
                {
                    ProductStyles ?
                        Products.map((data, index) =>
                            <CardProduct OnClick={ SeeProductStyles } Editar={Editar} ProductData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                        )
                        :
                        Products.map((data, index) =>
                            <CardProductStyle Editar={Editar} ProductData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                        )
                        
                }
            </div>
        </Container>
    );
}
