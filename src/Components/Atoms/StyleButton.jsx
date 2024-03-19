import styled from 'styled-components';
export const StyleButton = styled.button`
    padding: 1vw 2vw;
    margin-top: 1vw;
    margin-right: 1vw;
    background-color: ${props => props.clicked ? "#641f99" : "#9755c9"};
    font-size: 1.5vw;
    color: rgba(255, 247, 243, 1);
    filter: ${props => props.clicked ? "drop-shadow(0.5vw 0.5vw 0vw rgba(0, 0, 0, 0.3))" : ""} ;
    transform: ${props => props.clicked ? "translate( -.5vw, -.5vw)" : ""};

    &:hover{
        filter: drop-shadow(0.5vw 0.5vw 0vw rgba(0, 0, 0, 0.3)) ;
        transform: translate( -.5vw, -.5vw);
    }
`;