import styled from 'styled-components';
import { DataCard } from '../Atoms/DataCard';
import './CardEntrepreneur.styl'
import { ButtonEditCard } from '../../../../Components/Atoms/ButtonEditCard';
import { TopExistenciaCard } from '../../../../Components/Atoms/TopExistenciaCard';
const Container = styled.div`
    background-color: rgba(231, 185, 188, 1);
    width: calc( ( 75vw - 5vw ) / 4 );
    height: calc( ( 75vw - 5vw ) / 4 );
    background-image: ${props => `url("${props.Img}")`};
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardEntrepreneur({ OnClick, OnClickEditButton, EntrepreneurData }) {
    return (
        <Container
            onClick={OnClick}
            className={`Card`}
            Img={ EntrepreneurData.img}>
            <Fondo>
                <TopExistenciaCard title={"Top"} count={EntrepreneurData.top} />
                <ButtonEditCard onClick={OnClickEditButton}/>
                <DataCard Data={EntrepreneurData} />
            </Fondo>
        </Container>
    )
}