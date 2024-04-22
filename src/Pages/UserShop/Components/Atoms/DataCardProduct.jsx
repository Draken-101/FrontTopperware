import styled from 'styled-components';
const Container = styled.div`
    width: 100%;
    height: 30% !important;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background-color: rgba(87, 0, 155, 0.61);
    span{
        width: 70%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: .1vw .7vw;
        color: rgba(255, 247, 243, 1);
        font-size: .8vw;
        font-weight: 400;
        &:last-child{
            border-radius: .2vw;
            margin-left: .7vw;
            width: fit-content;
            background-color: rgba(0, 155, 132, 0.61);
        }
    }
    .name{
        font-size: 1.5vw !important;
        font-weight: 500 !important;
    }
`;
export function DataCardProduct({Data, StylesCount}){
    return(
        <Container>
            <span className='name'> {Data.nombre} </span>
            <span> #{Data.clave} </span>
            <span> {StylesCount} estilos diferentes </span>
        </Container>
    )
}