import styled from 'styled-components';
import { DataCard } from '../Atoms/DataCard';
import { TopExistenciaCard } from '../Atoms/TopExistenciaCard';
import { ButtonEditCard } from '../Atoms/ButtonEditCard';
const Container = styled.div`
    display: flex;
    background-color: ${props => props.Type === "Existencias" ? "rgba(250, 193, 255, 1)" : "rgba(231, 185, 188, 1)"};
    width: ${props => `calc( ( 96vw - ${props.Gap * ( props.Count - 1)}vw ) / ${props.Count} )`};
    height: ${props => `calc( ( 96vw - ${props.Gap * ( props.Count - 1)}vw ) / ${props.Count} )`};
    border-radius: .5vw;
    background-image: ${props => `url("${props.Img}")` };
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; 
    object-fit: contain;
    overflow: hidden;
    div{
        width: 100%;
        height: 100%;
    }
`;
const Fondo = styled.div`
    position: relative;
    display: flex;
    align-items: end;
    background: rgb(131,52,193);
    background: linear-gradient(0deg, rgba(131,52,193,1) 0%, rgba(131,52,193,1) 25%, rgba(131,52,193,0.42200630252100846) 35%, rgba(157,50,191,0) 42%, rgba(131,52,193,0) 100%);
`;
export function Card({Count, Gap, Type, Img, DisableDataExtra , DisableEdit}){
    return(
        <Container Type={Type} Count={Count ? Count : "4"} Gap={Gap ? Gap : "1"} Img={Img ? Img : "src/assets/Img/Minnie-perfil.png"}>
            <Fondo Type={Type}>
                { !DisableDataExtra ? <TopExistenciaCard Name={Type.name} Number={Type.number}/> : "" }
                { !DisableEdit ? <ButtonEditCard/> : ""}
                <DataCard/>
            </Fondo>
        </Container>
    )
}