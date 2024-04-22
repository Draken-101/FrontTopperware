import styled from 'styled-components';
export const CardInfo = styled.div`
    width: 100%;
    height: 5vw;
    background-color: rgba(255, 247, 243, 1);
    display: grid;
    justify-content: space-between;
    grid-template-columns: ${props => props.Columns };
    grid-template-rows: 100%;
    align-items: center;
    .Name{
        padding-left: 1vw;
    }
    .Btn{
        width: calc(100% - .15vw);
        height: 65%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;