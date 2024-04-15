import { CardEntrepreneur } from '../Molecules/CardEntrepreneur';
import './CardsEntrepreneurs.styl'
export function CardsEntrepreneurs({ Editar, Entrepreneurs, handleButtonClick, clickedButton }) {
    return (
        <div className='ContainerCardsAdminEntrepreneurs'>
            {
                Entrepreneurs.map((entrepreneur) => 
                    <CardEntrepreneur key={entrepreneur.numeroCliente} Editar={Editar} Top={entrepreneur.top} EntrepreneurData={entrepreneur} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                )
            }
        </div>
    );
}
