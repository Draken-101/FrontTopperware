import styled from 'styled-components';
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.Color || "rgba(87, 0, 155, 0.61)"};
    padding: ${props => props.Padding || "1vw"};
    width: ${props => props.Width || "fit-content"};
    height: ${props => props.Height || "fit-content"};
    color: rgba(255, 247, 243, 1);
    font-size: ${props => props.Size || "2vw"};
    font-weight: normal;
    letter-spacing: ${props => props.LetterSpacing || "0%"};
    &:hover{
        background-color: ${props => props.Hover || "rgba(88, 0, 155, 0.816)"};
    }
`;