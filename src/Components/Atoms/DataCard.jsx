import styled from 'styled-components';
const Container = styled.div`
    height: 28% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .2vw;
    background-color: rgba(87, 0, 155, 0.61);
    span{
        margin: 0vw .7vw;
        color: rgba(255, 247, 243, 1);
        font-size: 1vw;
        font-weight: 400;
    }
    .name{
        font-size: 1.5vw !important;
        font-weight: 500 !important;
    }
`;
export function DataCard({Data, DisableClave}){
    return(
        <Container>
            <span className='name'> {Data? Data.nombre : "Nombre"} </span>
            { DisableClave ? "" : <span> {Data? Data.clave : "Clave"} </span> }
            <span> {Data? `$${Data.totalVenta || Data.precio}` : "$000.00"} </span>
        </Container>
    )
}