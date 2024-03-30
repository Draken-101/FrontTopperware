import styled from 'styled-components';
export const ButtonPinkRed = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(186, 0, 123, 1);
    padding: 1vw;
    width: ${props => props.Width };
    height: ${props => props.Height };
    color: rgba(255, 247, 243, 1);
    font-size: 2vw;
    font-weight: normal;
    letter-spacing: ${props => props.LetterSpacing };
    &:hover{
        filter: drop-shadow(0.5vw 0.5vw 0vw rgba(0, 0, 0, 0.3)) ;
        transform: translate( -.5vw, -.5vw);
    }
`;