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
export function DataCard({Data}){
    return(
        <Container>
            <span className='name'> {Data.nombre} </span>
            <span> {Data.clave} </span>
            <span> {`$${Data.totalVenta}`} </span>
        </Container>
    )
}