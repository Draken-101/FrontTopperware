import './ProductShoppingCart.styl';
import { CardInfo } from '../Atoms/CardInfo';
import styled from 'styled-components';
const Img = styled.div`
    background-image: ${props => `url("${props.Image}")}`};
`;
const Span = styled.span`
    font-size: 1.5vw;
    display: flex;
    align-items: center;
    height: 65%;
    color: rgba(87, 0, 155, 0.61);
    font-weight: 500;
`;
function ProductShoppingCart({Product, Borrar}){
    return(
        <CardInfo Columns={"5vw 50% calc(20% - .15vw) calc(20% - .15vw) calc(10% - 5vw)"}>
            <Img className='ProductImg' Image={Product.img}/>
            <Span className='Name'> {Product.name} </Span>
            <Span className='Border'> {Product.count} </Span>
            <Span className='Border Price'> ${Product.price} </Span>
            { Borrar }
        </CardInfo>
    )
}
export default ProductShoppingCart;