import styled from 'styled-components';
export const ProfileImg = styled.img`
    object-fit: cover;
    width: ${props => props.Width || "100%"};
    height: ${props => props.Height || "100%"};
`;