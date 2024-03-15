import styled from 'styled-components';

export const ButtonIcon = styled.button`
    position: relative;
    padding: .2vw;
    display: flex;
    width: fit-content;
    justify-content: end;
    align-items: center;
    background-color: white;
    border: .2vw solid rgba(87, 0, 155, 0.61);
    transition: width .3s; /* Añadimos la transición para el color del borde y el ancho */
    img {
        width: 3vw;
        height: 3vw;
    }
    label {
        justify-content: center;
        overflow: hidden;
        width: 0vw;
        transition:  .7s; 
        margin: 0vw;
        cursor: pointer;
        opacity: 0; 
    }
    &:hover label {
        width: calc( ( 100vw / 4 ) - .5vw );
        margin: 0vw 1vw; 
        opacity: 1;
    }
`;
