import styled from 'styled-components';
export const ButtonEditCard = styled.button`
    position: absolute;
    z-index: 4;
    width: 30%;
    height: 30%;
    bottom: 0;
    right: 0;
    border: ${props => props.clicked ? "0.3vw" : "0.1vw"} solid rgba(87, 0, 155, 0.61);
    border-radius: 0;
    border-top-left-radius: 100% ;
    border-bottom-right-radius: 0.5vw;
    background-color: white;
    background-image: url('/assets/Icons/icons8-lápiz-96.png');
    background-position: 70% 70%;
    background-size: 60%;
    background-repeat: no-repeat;
`;