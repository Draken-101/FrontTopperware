import './ShoppingCart.styl'
import '../Molecules/ProductShoppingCart.jsx';
import { ButtonsAndTotal } from '../Molecules/ButtonsAndTotal';
import { useEffect, useState } from 'react';
import { ButtonRemove } from '../../../../Components/Atoms/ButtonRemove';
import  ProductShoppingCart  from '../Molecules/ProductShoppingCart.jsx';

export function ShoppingCart({ seeShoppingCart, Products, PlaceAnOrder }) {
    const [products, setProducts] = useState(Products);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        calcTotal();
    }, [products]);
    const calcTotal = () => {
        let total = 0;
        for (const product of products) {
            total += product.price;
        }
        setTotal(total);
    };
    const handleDelete = (productToDelete) => {
        const updatedProducts = products.filter(product => product !== productToDelete);
        console.log("a")
        setProducts(updatedProducts);
    };
    return (
        <div className='ShoppingCart'>
            <div className='Products'>
                {
                products.map((product) => (
                    <ProductShoppingCart Product={product} Borrar={
                        <div className='Btn Border'>
                            <ButtonRemove Borrar={() => handleDelete(product)} />
                        </div>
                    }/>
                ))}
            </div>
            <ButtonsAndTotal PlaceAnOrder={PlaceAnOrder} Volver={seeShoppingCart} Total={total} RemoveAll={() => setProducts([])}/>
        </div>
    );
}
