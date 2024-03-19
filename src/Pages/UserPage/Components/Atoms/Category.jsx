import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .4vw 1vw;
`;
const LabelData = styled.label`
    text-align: ${props => props.Size ? "center" : "start"};
    width: 35%;
    color: ${props => props.Size ? "rgba(0, 92, 158, 0.65)" : "rgba(87, 0, 155, 0.61)"};
    font-size: ${props => props.Size || "1.5vw"};
    font-weight: 500;
`;
export function Category({CategoryData}){
    return(
        <Container>
            <LabelData>
                Categoria
            </LabelData>
            <LabelData Size={"1.2vw"}>
                {CategoryData ? CategoryData : "Linea de liquidos"}
            </LabelData>
        </Container>
    )
}