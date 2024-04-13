import styled from 'styled-components';
import { DataCardProduct } from '../Atoms/DataCardProduct';
import { useEffect, useState } from 'react';
const Container = styled.div`
    position: relative;
    z-index: 100;
    background-color:rgba(231, 185, 188, 1);
    width: calc( ( 96vw - 4vw ) / 5 );
    height: calc( ( 96vw - 4vw ) / 5 );
    background-image: url(${props => props.Img});
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardProduct({ OnClick, ProductData, StylesCount, Fondos }) {
    const [imgFondo, setImgFondo] = useState(null);
    useEffect(() => {
        const FondoCard = [...Fondos] || "";
        let currentIndex = 1;
        setImgFondo(FondoCard[0]);
        const intervalId = setInterval(() => {
            setImgFondo(FondoCard[currentIndex]);
            currentIndex = (currentIndex + 1) % FondoCard.length;
        }, (Math.random() * (20000 - 10000) + 10000));

        return () => clearInterval(intervalId);
    }, [ProductData]);
    return (
        <Container
            onClick={() => OnClick(ProductData)}
            className={"Card Product"}
            Img={imgFondo}>
            <Fondo >
                <DataCardProduct Data={ProductData} StylesCount={StylesCount}/>
            </Fondo>
        </Container>
    )
}