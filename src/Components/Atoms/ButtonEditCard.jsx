import styled from 'styled-components';
export const ButtonEditCard = styled.button`
    position: absolute;
    width: 30%;
    height: 30%;
    bottom: 0;
    right: 0;
    border: 0.1vw solid rgba(186, 0, 123, 1);
    border-radius: 0;
    border-top-left-radius: 100% ;
    border-bottom-right-radius: 0.5vw;
    background-color: rgba(255, 247, 243, 1);
    background-image: url('src/assets/Icons/icons8-lápiz-96.png');
    background-position: 70% 70%;
    background-size: 60%;
    background-repeat: no-repeat;
    &:hover{
        background-color: rgba(221, 209, 255, 1);
        border: 0.3vw solid rgba(186, 0, 123, 1);
    }
`;