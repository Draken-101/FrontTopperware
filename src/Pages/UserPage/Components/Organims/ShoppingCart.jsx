import './ShoppingCart.styl'
import '../Molecules/ProductShoppingCard.jsx';
import { ButtonsAndTotal } from '../Molecules/ButtonsAndTotal';
import { ButtonRemove } from '../../../../Components/Atoms/ButtonRemove';
import { ProductShoppingCard } from '../Molecules/ProductShoppingCard.jsx';

export function ShoppingCart({ seeShoppingCart, Car, PlaceAnOrder, RemoveAll, handleDelete, Increment, Decrement }) {
    return (
        <div className='ShoppingCart'>
            <div className='Products'>
                {
                    Car ?
                    Array.isArray(Car.car) ?
                        Car.car.map((product) => (
                            <ProductShoppingCard Increment={Increment} Decrement={Decrement} TotalPrecio={product.totalPrecio} Product={product} Borrar={
                                <div className='Btn Border'>
                                    <ButtonRemove Borrar={() => handleDelete(product.product)} />
                                </div>
                            } />
                        ))
                        :
                        <ProductShoppingCard Increment={Increment} Decrement={Decrement} TotalPrecio={Car.car.totalPrecio} Product={Car.car.product} Borrar={
                            <div className='Btn Border'>
                                <ButtonRemove Borrar={() => handleDelete(Car.car.product)} />
                            </div>
                        } />
                        : ''
                }
            </div>
            <ButtonsAndTotal PlaceAnOrder={PlaceAnOrder} Volver={seeShoppingCart} Total={Car ? Car.totalPrecio : 0 } RemoveAll={RemoveAll} />
        </div>
    );
}
