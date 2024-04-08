import styled from 'styled-components';
export const ButtonEditCard = styled.button`
    position: absolute;
    z-index: 4;
    width: 30%;
    height: 30%;
    bottom: 0;
    right: 0;
    border: ${props => props.clicked ? "0.3vw" : "0.1vw"} solid rgba(186, 0, 123, 1);
    border-radius: 0;
    border-top-left-radius: 100% ;
    border-bottom-right-radius: 0.5vw;
    background-color: ${props => props.clicked ? "rgba(221, 209, 255, 1)" : "rgba(255, 247, 243, 1)"};
    background-image: url('src/assets/Icons/icons8-lápiz-96.png');
    background-position: 70% 70%;
    background-size: 60%;
    background-repeat: no-repeat;
`;