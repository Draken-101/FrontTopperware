import styled from 'styled-components';
import { DataCard } from '../Atoms/DataCard';
import './CardEntrepreneur.styl'
import { ButtonEditCard } from '../../../../Components/Atoms/ButtonEditCard';
import { TopExistenciaCard } from '../../../../Components/Atoms/TopExistenciaCard';
const Container = styled.div`
    background-color: rgba(231, 185, 188, 1);
    width: calc( ( ${props => props.Form ? 75 : 100}vw - 5vw ) / 4 );
    height: calc( ( ${props => props.Form ? 75 : 100}vw - 5vw ) / 4 );
    background-image: url(${props => props.Fondo});
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardEntrepreneur({ Editar, EntrepreneurData, handleButtonClick, clickedButton, Top, Form, openForm }) {

    return (
        <Container
            Form={Form}
            key={EntrepreneurData.numeroCliente}
            className={`Card`}
            Fondo={EntrepreneurData.img}>
            <Fondo>
                <TopExistenciaCard title={"Top"} count={Top} />
                <ButtonEditCard onClick={() => {
                    openForm()
                    Editar(EntrepreneurData);
                    handleButtonClick(Top);
                }}
                    clicked={Top == clickedButton}
                />
                <DataCard Data={EntrepreneurData} />
            </Fondo>
        </Container>
    )
}