import styled from 'styled-components';
export const Paragraph = styled.p`
    font-size: 1.3vw;
    text-align: justify;
    margin: 1vw;
    height: 25%;
    overflow-y: scroll;
    color: rgba(87, 0, 155, 0.57);
    font-weight: 500;
    &::-webkit-scrollbar {
        width: 0px;
    }
`;