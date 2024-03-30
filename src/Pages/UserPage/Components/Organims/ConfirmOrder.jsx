import './ConfirmOrder.styl'
import { LoginLogo } from '../../../../Components/Molecules/LoginLogo';
import ProductShoppingCart from '../Molecules/ProductShoppingCart';
import { useEffect, useState } from 'react';
import  Total  from '../Molecules/Total';
import ButtonsOrder from '../Molecules/ButtonsOrder';
export function ConfirmOrder({ Products, Cancelar }) {
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(()=>{
        let total = 0;
        let price = 0;
        for (const product of Products){
            total += product.count;
            price += product.price;
        }
        setTotalProducts(total);
        setTotalPrice(price);
    }, [Products])
    return (
        <div className='ConfirmOrder'>
            <LoginLogo Width={"35%"} />
            <div className='Order'>
                <h1> Productos </h1>
                <hr />
                <div className='ContainerOrderProducts'>
                    {
                        Products.map((product) => (
                            <ProductShoppingCart  Product={product} />
                        ))
                    }
                </div>
                <hr />
                <Total Title={"Total de productos"} totalProducts={totalProducts} Color={"rgba(88, 0, 155, 0.899)"}/>
                <hr />
                <Total Title={"Total de compra"} totalProducts={`$${totalPrice}`} Color={"rgba(0, 35, 4, 0.6)"}/>
                <hr />
                <ButtonsOrder Cancelar={Cancelar}/>
            </div>
        </div>
    )
}