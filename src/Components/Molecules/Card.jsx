import styled from 'styled-components';
import { DataCard } from '../Atoms/DataCard';
import { TopExistenciaCard } from '../Atoms/TopExistenciaCard';
import { ButtonEditCard } from '../Atoms/ButtonEditCard';
import './Card.css'
const Container = styled.div`
    background-color: ${props => props.Type === "Existencias" ? "rgba(250, 193, 255, 1)" : "rgba(231, 185, 188, 1)"};
    width: ${props => `calc( ( 96vw - ${props.Gap * (props.Count - 1)}vw ) / ${props.Count} )`};
    height: ${props => `calc( ( 96vw - ${props.Gap * (props.Count - 1)}vw ) / ${props.Count} )`};
    background-image: ${props => `url("${props.Img}")`};
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function Card({ Count, Gap, Type, Img, DisableDataExtra, DisableEdit, DisableClave, IsProduct, OnClick, OnClickEditButton, Sell, ProductoData }) {
    return (
        <Container
            onClick={OnClick}
            className={`Card ${Sell ? "Product" : ""}`}
            Type={Type}
            Count={Count ? Count : "4"}
            Gap={Gap ? Gap : "1"}
            Img={Img ? Img : IsProduct ? "src/assets/Icons/img-Producto.svg" : "src/assets/Img/Minnie-perfil.png"}>
            <Fondo Type={Type}>
                {!DisableDataExtra ? <TopExistenciaCard Name={Type.name} Number={Type.number} /> : ""}
                {!DisableEdit ? <ButtonEditCard onClick={OnClickEditButton} /> : ""}
                <DataCard DisableClave={DisableClave} Data={ProductoData} />
            </Fondo>
        </Container>
    )
}