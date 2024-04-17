import styled from 'styled-components';
import { DataCard } from '../Atoms/DataCard';
import './CardEntrepreneur.styl'
import { ButtonEditCard } from '../../../../Components/Atoms/ButtonEditCard';
import { TopExistenciaCard } from '../../../../Components/Atoms/TopExistenciaCard';
import { useEffect, useState } from 'react';
const Container = styled.div`
    background-color: rgba(231, 185, 188, 1);
    width: calc( ( 75vw - 5vw ) / 4 );
    height: calc( ( 75vw - 5vw ) / 4 );
    background-image: url(${props => props.Fondo});
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
`;
export function CardEntrepreneur({Editar, EntrepreneurData, handleButtonClick, clickedButton, Top }) {
    const [newUrlPreview, setNewUrlPreview] = useState("")

    useEffect(()=>{
        console.log( EntrepreneurData)
    }, [])


    return (<>
    
            <Container
            key={EntrepreneurData.numeroCliente}
            className={`Card`}
            Fondo={ EntrepreneurData.img}>
            <Fondo>
                <TopExistenciaCard title={"Top"} count={Top} />
                <ButtonEditCard onClick={()=> {
                    Editar(EntrepreneurData);
                    handleButtonClick(Top);
                }}
                clicked={Top == clickedButton}
                />
                <DataCard Data={EntrepreneurData} />
            </Fondo>
        </Container>
        <div className="dwwa">
        </div>
    </>
    )
}