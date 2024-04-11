import styled from 'styled-components';
export const ButtonIcon = styled.button`
    width: 3vw;
    height: 3vw;
    background-color: white !important;
    border: ${props => props.clicked ? ".3vw" : ".15vw"} solid rgba(87, 0, 155, 0.61);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
    transition: .3s;
    background-image: ${props => `url("${props.Img}")` || ""};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 85%;
`;