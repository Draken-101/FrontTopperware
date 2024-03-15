import styled from 'styled-components';
export const Label = styled.label`
    display: flex;
    width: 100%;
    justify-content: ${props => props.Justify || "start"};
    font-size: ${props => props.Size || "2vw"};
    color: rgba(87, 0, 155, 0.61);
    font-weight: ${props => props.Weight || "500"};
    letter-spacing: ${props => props.LetterSpacing || "0vw"};
`;