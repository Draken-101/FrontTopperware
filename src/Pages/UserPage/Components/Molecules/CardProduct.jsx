import styled from 'styled-components';
import './Card.styl'
import { DataCard } from '../../../../Components/Atoms/DataCard';
const Container = styled.div`
    position: relative;
    z-index: 100;
    background-color:rgba(231, 185, 188, 1);
    width: calc( ( 96vw - 4vw ) / 5 );
    height: calc( ( 96vw - 4vw ) / 5 );
    background-image: url("src/assets/Icons/img-Producto.svg");
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardProduct({ Img, OnClick, ProductoData }) {
    return (
        <Container onClick={OnClick} className={"Card Product"}>
            <Fondo>
                <DataCard DisableClave={"1"} Data={ProductoData} />
            </Fondo>
        </Container>
    )
}