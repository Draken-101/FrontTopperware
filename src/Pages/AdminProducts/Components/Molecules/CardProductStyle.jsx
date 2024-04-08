import styled from 'styled-components';
import './CardProduct.styl'
import { ButtonEditCard } from '../../../../Components/Atoms/ButtonEditCard';
import { TopExistenciaCard } from '../../../../Components/Atoms/TopExistenciaCard';
import { DataCardProductStyle } from '../Atoms/DataCardProductStyle';
const Container = styled.div`
    background-color: rgba(250, 193, 255, 1);
    width: calc( ( 75vw - 5vw ) / 4 );
    height: calc( ( 75vw - 5vw ) / 4 );
    background-image: ${props => `url("${props.Img}")`};
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardProductStyle({Editar, OnClick, ProductData, handleButtonClick, clickedButton }) {
    return (
        <Container
            onClick={OnClick}
            className={`Card`}
            Img={ ProductData.img}>
            <Fondo>
                <TopExistenciaCard title={"Existencias"} count={ProductData.cantidad} />
                <ButtonEditCard onClick={()=> {
                    Editar(EntrepreneurData);
                    handleButtonClick(EntrepreneurData.clave);
                }}
                clicked={ProductData.clave == clickedButton}
                />
                <DataCardProductStyle Data={ProductData} />
            </Fondo>
        </Container>
    )
}