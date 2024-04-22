import styled from 'styled-components';

export const ButtonIcon = styled.button`
    width: 3vw;
    height: 3vw;
    background-color: white !important;
    border: ${props => props.clicked ? ".3vw" : ".15vw"} solid rgba(87, 0, 155, 0.61);
    border-bottom-left-radius: ${props => props.open ? '0vw' : '.3vw' };
    border-bottom-right-radius: ${props => props.open ? '0vw' : '.3vw' };
    border-bottom: ${props => props.clicked ? '0vw' : props.open ? '0vw' : '.15vw solid rgba(87, 0, 155, 0.61)' };
    transition: all .3s ease !important;
    background-image: ${props => `url("${props.Img}")` || ""};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 85%;
`;