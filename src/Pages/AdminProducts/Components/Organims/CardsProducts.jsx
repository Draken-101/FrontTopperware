
import './CardsProducts.styl'
import { CardProduct } from '../Molecules/CardProduct';
import { CardProductStyle } from '../Molecules/CardProductStyle';
export function CardsProducts({ ProductsStyles, TypeCards, Editar, Products, handleButtonClick, clickedButton, SeeProductStyles }) {
    return (
        <div className='ContainerCardsAdminEntrepreneurs'>
            {
                TypeCards === "Normal" ?
                    //SeeProductStyles, Editar, ProductData, handleButtonClick, clickedButton 
                    Products.map((data, index) => {
                        let Fondos = [...ProductsStyles.map((PS) => {
                            if(PS.getClave() === data.getClave())
                                return PS.getImg();
                        })]
                        Fondos = [...Fondos.filter((fondo) => fondo !== undefined )];
                        return <CardProduct SeeProductStyles={SeeProductStyles} Fondos={Fondos} Editar={Editar} ProductData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                    }
                    )
                    :
                    //Editar, OnClick, ProductData, handleButtonClick, clickedButton 
                    Products.map((data, index) =>
                        <CardProductStyle Editar={Editar} ProductData={data} handleButtonClick={handleButtonClick} clickedButton={clickedButton} />
                    )
            }
        </div>
    );
}
