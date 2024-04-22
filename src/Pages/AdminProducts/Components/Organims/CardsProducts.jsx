
import './CardsProducts.styl'
import { CardProduct } from '../Molecules/CardProduct';
export function CardsProducts({ Styles, Editar, Products, handleButtonClick, clickedButton, openForm, Form }) {
    return (
        <div className='ContainerCardsAdminEntrepreneurs'>
            {
                //SeeProductStyles, Editar, ProductData, handleButtonClick, clickedButton 
                Products?.map((data, index) => {
                    let Fondos = [...Styles?.map((estilo) => {
                        if (estilo.clave.split('-')[0] === data.clave)
                            return estilo.img;
                    })]
                    const newFondos = [...Fondos.filter((img) => img !== undefined)];
                    return <CardProduct openForm={openForm} Form={Form} Fondos={newFondos} Editar={Editar} ProductData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                })
            }
        </div>
    );
}
