import styled from 'styled-components';
export const ButtonIcon = styled.button`
    padding: .2vw;
    width: 3vw;
    background-color: white;
    border: .15vw solid rgba(87, 0, 155, 0.61);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 0;
    transition: width .3s;
    background-image: ${props => `url("${props.Img}")` || ""};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 85%;
    transition: .3s ;
`;