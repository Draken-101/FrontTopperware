import styled from 'styled-components';
import { TopExistenciaCard } from '../../../../Components/Atoms/TopExistenciaCard';
import './Card.styl'
import { DataCard } from '../../../../Components/Atoms/DataCard';
const Container = styled.div`
    background-color: rgba(231, 185, 188, 1);
    width: calc( ( 96vw - 4vw ) / 5 );
    height: calc( ( 96vw - 4vw ) / 5 );
    background-image: url("src/assets/Img/Minnie-perfil.png");
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardTop({ Img, OnClick, ProductoData }) {
    return (
        <Container
            onClick={OnClick}
            className="Card">
            <Fondo >
                <TopExistenciaCard title={"Top"} count={"1"} />
                <DataCard Data={ProductoData} />
            </Fondo>
        </Container>
    )
}