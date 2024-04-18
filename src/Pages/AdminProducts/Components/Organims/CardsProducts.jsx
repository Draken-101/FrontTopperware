
import './CardsProducts.styl'
import { CardProduct } from '../Molecules/CardProduct';
export function CardsProducts({ Styles, Editar, Products, handleButtonClick, clickedButton }) {
    return (
        <div className='ContainerCardsAdminEntrepreneurs'>
            {
                //SeeProductStyles, Editar, ProductData, handleButtonClick, clickedButton 
                Products?.map((data, index) => {
                    let Fondos = [...Styles?.map((estilo) => {
                        if (estilo.clave.split('-')[0] === data.clave)
                            return estilo.img;
                    })]
                    return <CardProduct Fondos={Fondos} Editar={Editar} ProductData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                })
            }
        </div>
    );
}
