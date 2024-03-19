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
        justify-content: space-around;
    }
`;
export function StockPriceQuantity({ Data }) {
    return (
            <Container>
                <div>
                    <label className='LabelData Purple'> Existencias </label>
                    <label className='LabelData Azian' > {Data ? Data.existencias : "1"} </label>
                </div>
                <div>
                    <label className='LabelData Purple'> Precio </label>
                    <label className='LabelData Azian'> {Data ? Data.precio : "$000.00"} </label>
                </div>
                <div>
                    <label className='LabelData Purple'> Cantidad </label>
                    <Field className='Field' id={"cantidad"} name={"cantidad"} type={"number"} min={0} max={ Data ? Data.existencias : 1}/>
                </div>
            </Container>
    )
}