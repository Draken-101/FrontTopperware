import styled from 'styled-components';
const Container = styled.div`
    height: 28% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span{
        margin: 0vw .7vw;
        color: rgba(255, 247, 243, 1);
        font-size: 1.1vw;
        font-weight: 500;
    }
`;
export function DataCard({Data}){
    return(
        <Container>
            <span> {Data? Data.nombre : "Nombre"} </span>
            <span> {Data? Data.clave : "Clave"} </span>
            <span> {Data? `$${Data.totalVenta}` : "$000.00"} </span>
        </Container>
    )
}