import styled from 'styled-components';
import { DataCardProduct } from '../Atoms/DataCardProduct';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
    position: relative;
    z-index: 100;
    background-color:rgba(231, 185, 188, 1);
    width: calc( ( 96vw - 4vw ) / 5 );
    height: calc( ( 96vw - 4vw ) / 5 );
    background-image: url(${props => props.Fondo});
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardProduct({ OnClick, ProductData, Styles, Fondos }) {
    const [imgFondo, setImgFondo] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const FondoCard = [...Fondos] || ["public/assets/Img/Logo.jpg"];
        let currentIndex = 1;
        setImgFondo(FondoCard[0]);
        const intervalId = setInterval(() => {
            setImgFondo(FondoCard[currentIndex]);
            currentIndex = (currentIndex + 1) % FondoCard.length;
        }, (Math.random() * (20000 - 10000) + 10000));

        return () => clearInterval(intervalId);
    }, []);
    return (
        <Container
            onClick={() => navigate(`/Product/${ProductData.clave}`)}
            className={"Card Product"}
            Fondo={imgFondo}>
            <Fondo >
                <DataCardProduct Data={ProductData} StylesCount={Styles?.length} />
            </Fondo>
        </Container>
    )
}