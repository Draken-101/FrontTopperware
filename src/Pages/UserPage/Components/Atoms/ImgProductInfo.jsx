import styled from 'styled-components';
export const ImgProductInfo = styled.img`
    width: ${props => props.Width || "5vw"};
    height: ${props => props.Height || "5vw"};
    object-fit: cover;
`;