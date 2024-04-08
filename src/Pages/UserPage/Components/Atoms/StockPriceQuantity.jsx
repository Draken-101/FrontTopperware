import { Field } from 'formik';
import styled from 'styled-components';
import './StockPriceQuantity.css'
const Container = styled.div`
    display: grid;
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
    grid-template-rows: auto;
    padding: 1vw 1vw;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    input{
        margin: 0 !important;
            font-size: 1.5vw;
        &::placeholder{
        }
    }
`;
export function StockPriceQuantity({ Data }) {
    return (
        <Container>
            <div>
                <label className='LabelData Purple'> Existencias </label>
                <label className='LabelData Azian' > {Data.cantidad} </label>
            </div>
            <div>
                <label className='LabelData Purple'> Precio </label>
                <label className='LabelData Azian'> {Data.precio} </label>
            </div>
            <div>
                <label className='LabelData Purple'> Cantidad </label>
                <Field className='Count' id={"cantidad"} name={"cantidad"} type={"number"} />
            </div>
        </Container>
    )
}