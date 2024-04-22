import { CardEntrepreneur } from '../Molecules/CardEntrepreneur';
import './CardsEntrepreneurs.styl'
export function CardsEntrepreneurs({ Editar, Entrepreneurs, handleButtonClick, clickedButton, Form, openForm }) {
    return (
        <div className={`ContainerCardsAdminEntrepreneurs`}>
            {
                Entrepreneurs.map((entrepreneur) => 
                    <CardEntrepreneur openForm={openForm} Form={Form} key={entrepreneur.numeroCliente} Editar={Editar} Top={entrepreneur.top} EntrepreneurData={entrepreneur} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                )
            }
        </div>
    );
}
