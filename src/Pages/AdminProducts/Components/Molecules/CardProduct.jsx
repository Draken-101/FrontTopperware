import styled from 'styled-components';
import './CardProduct.styl'
import { ButtonEditCard } from '../../../../Components/Atoms/ButtonEditCard';
import { TopExistenciaCard } from '../../../../Components/Atoms/TopExistenciaCard';
import { DataCardProduct } from '../Atoms/DataCardProduct';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export const CardProduct = ({ Fondos, Editar, ProductData, handleButtonClick, clickedButton }) => {
    const navigate = useNavigate();
    const [imgFondo, setImgFondo] = useState('https://cdn-icons-png.flaticon.com/512/1809/1809992.png');

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

    const handleCardClick = () => {
        navigate(`/AdminStyles/${ProductData.clave}`);
    };

    const handleEditButtonClick = () => {
        Editar(ProductData);
        handleButtonClick(ProductData.clave);
    };

    return (
        <Container className="Card Product" Img={imgFondo}>
            <div onClick={handleCardClick} className="FondoCardProduct" />
            <TopExistenciaCard title="Existencias" count={ProductData.cantidad} />
            <ButtonEditCard onClick={handleEditButtonClick} clicked={ProductData.clave === clickedButton} />
            <DataCardProduct Data={ProductData} />
        </Container>
    );
};