import styled from 'styled-components';
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.Color || "#9755c9"};
    padding: ${props => props.Padding || "1vw"};
    width: ${props => props.Width || "fit-content"};
    height: ${props => props.Height || "fit-content"};
    color: rgba(255, 247, 243, 1);
    font-size: ${props => props.Size || "2vw"};
    font-weight: normal;
    letter-spacing: ${props => props.LetterSpacing || "0%"};
    &:hover{
        filter: drop-shadow(0.5vw 0.5vw 0vw rgba(0, 0, 0, 0.3)) ;
        transform: translate( -.5vw, -.5vw);
    }
`;