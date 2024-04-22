import styled from 'styled-components';
import { ButtonEditCard } from '../../../../Components/Atoms/ButtonEditCard';
import { TopExistenciaCard } from '../../../../Components/Atoms/TopExistenciaCard';
import { DataCardProductStyle } from '../Atoms/DataCardProductStyle';
import { useEffect, useState } from 'react';
const Container = styled.div`
    background-color: rgba(250, 193, 255, 1);
    width: calc( ( ${props => props.Form ? 75 : 100}vw - 5vw ) / 4 );
    height: calc( ( ${props => props.Form ? 75 : 100}vw - 5vw ) / 4 );
    background-image: ${props => `url("${props.Img}")`};
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardStyle({ Editar, ProductData, handleButtonClick, clickedButton, openForm, Form }) {
    return (
        <Container
            Form={Form}
            className={`Card`}
            Img={ProductData.img}>
            <Fondo>
                <TopExistenciaCard title={"Cantidad"} count={ProductData.cantidad} />
                <ButtonEditCard onClick={() => {
                    openForm()
                    Editar(ProductData);
                    handleButtonClick(ProductData.clave);
                }}
                    clicked={ProductData.clave == clickedButton}
                />
                <DataCardProductStyle Data={ProductData} />
            </Fondo>
        </Container>
    )
}