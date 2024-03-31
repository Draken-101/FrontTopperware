import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30% !important;
    height: 30% !important;
    border-bottom-right-radius: 5vw;
    top: 0;
    position: absolute;
    left: 0;
    span{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const Header = styled.span`
    height: 30%;
    font-size: .9vw;
    color: rgba(255, 247, 243, 1);
    background-color: #8333c1;
`;
const Count = styled.span`
    height: 70%;
    align-items: start !important;
    font-size: 2vw;
    color: rgba(186, 0, 123, 1);
    background-color: rgba(255, 247, 243, 1);
    border-bottom-right-radius: 100%;
`;
export function TopExistenciaCard({title, count}){
    return(
        <Container>
            <Header>
                {title}
            </Header>
            <Count>
                {count}
            </Count>
        </Container>
    )
}