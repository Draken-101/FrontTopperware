import styled from 'styled-components';
import { Img } from '../../../../Components/Atoms/Img';
import { PrintDataProduct } from '../Molecules/PrintDataProduct';
import { Form, Formik } from 'formik';
import { Valores } from '../../Datos/Datos.Valores';
import { Validaciones } from '../../Datos/Datos.Validaciones';
import { Buttons } from '../Molecules/Buttons';
const Container = styled.div`
    display: grid;
    grid-template-columns: 42.5vw calc(100% - 42.5vw);
    grid-template-rows: 100%;
    width: calc(100% - 2vw);
    height: 42.5vw;
    margin: 1vw;
    background-color: rgba(255, 247, 243, 1);
    .Form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;
    }
`;
export function ProductInfo({ DataProduct }) {
    return (
        <Container>
            <Img src={DataProduct ? DataProduct.img : "src/assets/Img/Minnie2.jpg"} Width={"100%"} Height={"100%"} />
            <Formik
                className="Form"
                initialValues={Valores}
                validate={(v) => Validaciones(v)}
                onSubmit={({ resetForm }) => {
                    resetForm();
                    console.log('Formulario enviado');
                }}>
                <Form className="Form">
                    <PrintDataProduct Data={DataProduct} />
                    <Buttons/>
                </Form>
            </Formik>
        </Container>
    )
}