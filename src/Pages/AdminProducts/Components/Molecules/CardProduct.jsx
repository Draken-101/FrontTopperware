import styled from 'styled-components';
import './CardProduct.styl'
import { ButtonEditCard } from '../../../../Components/Atoms/ButtonEditCard';
import { TopExistenciaCard } from '../../../../Components/Atoms/TopExistenciaCard';
import { DataCardProduct } from '../Atoms/DataCardProduct';
import { useEffect, useState } from 'react';
const Container = styled.div`
    background-color: rgba(250, 193, 255, 1);
    width: calc( ( 75vw - 5vw ) / 4 );
    height: calc( ( 75vw - 5vw ) / 4 );
    background-image: url(${props => props.Img});
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardProduct({ Fondos, SeeProductStyles, Editar, ProductData, handleButtonClick, clickedButton }) {
    const [imgFondo, setImgFondo] = useState(null);
    useEffect(() => {
        if (Fondos[0] === undefined) {
            setImgFondo('https://cdn-icons-png.flaticon.com/512/1809/1809992.png')
        } else {
            const FondoCard = [...Fondos];
            let currentIndex = 1;
            setImgFondo(FondoCard[0]);
            const intervalId = setInterval(() => {
                setImgFondo(FondoCard[currentIndex]);
                currentIndex = (currentIndex + 1) % FondoCard.length;
            }, (Math.random() * (20000 - 10000) + 10000));

            return () => clearInterval(intervalId);
        }
    }, [ProductData]);
    return (
        <Container
            className={`Card Product`}
            Img={imgFondo}>
            <div
                onClick={() => SeeProductStyles(ProductData.clave)}
                className='FondoCardProduct' />
            <TopExistenciaCard title={"Existencias"} count={ProductData.cantidad} />
            <ButtonEditCard onClick={() => {
                Editar(ProductData);
                handleButtonClick(ProductData.clave);
            }}
                clicked={ProductData.clave === clickedButton}
            />
            <DataCardProduct onClick={() => OnClick} Data={ProductData} />
        </Container>
    )
}