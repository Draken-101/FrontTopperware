
import './CardsProducts.styl'
import { CardStyle } from '../Molecules/CardStyle';
export function CardsProducts({ Styles, Editar, handleButtonClick, clickedButton }) {
    return (
        <div className='ContainerCardsAdminEntrepreneurs'>
            {
                Styles?.map((data, index) =>
                    <CardStyle Editar={Editar} ProductData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                )
            }
        </div>
    );
}
