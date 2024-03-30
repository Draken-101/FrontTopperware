import styled from 'styled-components';
const Container = styled.div`
    width: 100%;
    height: 6%;
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    color: rgba(87, 0, 155, 0.61);
    font-weight: 500;
    justify-content: space-between;
    span:last-child{
        width: 20%;
        text-align: center;
        color: ${props => props.Color};
    }
`;
export default function Total({totalProducts, Color, Title}) {
    return (
        <Container Color={Color}>
            <span> { Title } </span>
            <span> { totalProducts } </span>
        </Container>
    )
}