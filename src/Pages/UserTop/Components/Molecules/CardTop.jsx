import styled from 'styled-components';
import { TopExistenciaCard } from '../../../../Components/Atoms/TopExistenciaCard';
import { DataCardEntrepreneur } from '../../../UserPage/Components/Atoms/DataCardEntrepreneur';
const Container = styled.div`
    background-color: rgba(231, 185, 188, 1);
    width: calc( ( 100vw - 8vw ) / 5 );
    height: calc( ( 100vw - 8vw ) / 5 );
    background-image: ${props => `url("${props.Img}")`};
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardTop({ EntrepreneurData }) {
    return (
        <Container
            className={`Card`}
            Img={ EntrepreneurData.img}>
            <Fondo>
                <TopExistenciaCard title={"Top"} count={EntrepreneurData.top} />
                <DataCardEntrepreneur Data={EntrepreneurData} />
            </Fondo>
        </Container>
    )
}