
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
export function Shop({ Styles, SeeProduct, Products }) {

    return (
        <Container>
            {
                Products?.map((data, index) =>
                    <CardProduct ProductData={data} StylesCount={
                        Styles?.reduce((total, style) => {
                            if (style.getClave() == data.getClave())
                                return total + 1
                            return total;
                        }, 0)}
                        Fondos={[...Styles?.filter((style) => {
                            if(style.getClave() === data.getClave())
                                console.log(style.img)
                                return style.img;
                        })]}
                        OnClick={SeeProduct} />
                )
            }
        </Container>
    )
}