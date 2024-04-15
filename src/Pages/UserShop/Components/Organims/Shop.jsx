
import { CardProduct } from '../Molecules/CardProduct';
import styled from 'styled-components';
const Container = styled.div`
    margin: 1vw;
    display: grid ;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1vw;
    grid-template-rows: repeat(auto-fill, 19vw);
    justify-items: center;
    align-items: end;
    width: 98vw;
    height: fit-content;
    max-height: calc(100% - 4vw);
    overflow-y: scroll;
`;
export function Shop({ Styles, Products }) {

    return (
        <Container>
            {
                Products?.map((data, index) =>
                    <CardProduct 
                        key={data.clave}
                        ProductData={data} Styles={[...Styles.filter((styles) => styles.getClave() === data.clave )]}
                        Fondos={[...Styles?.filter(style => {
                            return style.getClave() === data.clave;
                        }).map(style => style.img)]} />
                )
            }
        </Container>
    )
}