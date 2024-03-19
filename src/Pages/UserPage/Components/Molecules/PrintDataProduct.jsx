import styled from 'styled-components';
import { Label } from '../../../../Components/Atoms/Label';
import { Paragraph } from '../Atoms/Paragraph';
import { Category } from '../Atoms/Category';
import { Type } from '../Atoms/Type';
import { StockPriceQuantity } from '../Atoms/StockPriceQuantity';
import { ProductStyles } from '../Atoms/ProductStyles';
const Container = styled.div`
    height: 85%;
    padding: 1vw;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0px;
    }
`;
export function PrintDataProduct({ Data }) {
    return (
        <Container>
            <Label
                Width={"fit-content"}
                Size={"3vw"}
                Margin={"0vw 1vw"}>
                Nombre-Producto
            </Label>
            <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique, dignissimos laborum dolore alias laudantium 
                assumenda ducimus fugit aut dolores autem architecto ratione omnis! Quos officiis alias quisquam culpa. Aut.
            </Paragraph>
            <hr/>
            <Category/>
            <hr/>
            <Type/>
            <hr/>
            <StockPriceQuantity/>
            <hr/>
            <ProductStyles/>
        </Container>
    )
}