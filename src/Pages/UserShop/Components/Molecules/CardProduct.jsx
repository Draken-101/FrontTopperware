import styled from 'styled-components';
import { DataCardProduct } from '../Atoms/DataCardProduct';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
    position: relative;
    z-index: 100;
    background-color:#b9e7e1;
    width: calc( ( 96vw - 4vw ) / 5 );
    height: calc( ( 96vw - 4vw ) / 5 );
    background-image: url(${props => props.Fondo});
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardProduct({ ProductData, Fondos }) {
    const [imgFondo, setImgFondo] = useState(Fondos[0]);
    const navigate = useNavigate();

    useEffect(() => {
        if (Fondos.length === 0) {
            setImgFondo('https://cdn-icons-png.flaticon.com/512/1809/1809992.png');
        } else if (Fondos.length === 1) {
            setImgFondo(Fondos[0]);
        } else {
            let currentIndex = 1;
            const intervalId = setInterval(() => {
                console.log(Fondos[currentIndex]);
                setImgFondo(Fondos[currentIndex]);
                currentIndex = (currentIndex + 1) % Fondos.length;
            }, Math.random() * (20000 - 10000) + 10000);
    
            return () => clearInterval(intervalId);
        }
    }, [ProductData]);
    
    return (
        <Container
            onClick={() => navigate(`/Product/${ProductData.clave}`)}
            className={"Card Product"}
            Fondo={imgFondo}>
            <Fondo >
                <DataCardProduct Data={ProductData} StylesCount={ProductData.cantidad} />
            </Fondo>
        </Container>
    )
}