import styled from 'styled-components';
export const ProfileImg = styled.img`
    object-fit: cover;
    width: ${props => props.Wth || "100%"};
    height: ${props => props.Hht || "100%"};
`;