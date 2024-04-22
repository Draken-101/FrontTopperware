
import './CardsProducts.styl'
import { CardStyle } from '../Molecules/CardStyle';
export function CardsProducts({ Styles, Editar, handleButtonClick, clickedButton, openForm, Form }) {
    return (
        <div className='ContainerCardsAdminEntrepreneurs'>
            {
                Styles?.map((data, index) =>
                    <CardStyle key={data.clave} openForm={openForm} Form={Form} Editar={Editar} ProductData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                )
            }
        </div>
    );
}
