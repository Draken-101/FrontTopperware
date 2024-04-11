
import './CardsEntrepreneurs.styl'
import { CardEntrepreneur } from '../Molecules/CardEntrepreneur';
export function CardsEntrepreneurs({ Editar, Entrepreneurs, handleButtonClick, clickedButton, Buscar }) {
    return (
        <div className='ContainerCardsAdminEntrepreneurs'>
            {
                Entrepreneurs.map((data, index) =>
                    <CardEntrepreneur Editar={Editar} EntrepreneurData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                )
            }
        </div>
    );
}
