import './ProductShoppingCard.styl';
import { CardInfo } from '../Atoms/CardInfo';
import styled from 'styled-components';
const Span = styled.span`
    font-size: 1.5vw;
    display: flex;
    align-items: center;
    height: 65%;
    color: rgba(87, 0, 155, 0.61);
    font-weight: 500;
`;
export function ProductShoppingCard({ Product, Borrar ,TotalPrecio, Increment, Decrement}){
    return(
        <CardInfo Columns={"5vw 25% 25% calc(20% - 2.15vw) calc(20% - 2.15vw) calc(10% - 5vw)"}>
            <img className='ProductImg' src={Product.product.img}/>
            <Span className='Name'> {Product.nombre} </Span>
            <Span className='Border'><b>{Product.product.nombre}</b></Span>
            <div className='Border ProductShoppingCardInputs'>
                <Span>{Product.product.cantidad}</Span>
                <button className='ButtonDecrease Product' onClick={ ()=> Decrement(Product) }>-</button>
                <button className='ButtonIncrement Product' onClick={ () => Increment(Product)}>+</button>
            </div>
            <Span className='Border Price'> ${TotalPrecio} </Span>
            { Borrar }
        </CardInfo>
    )
}