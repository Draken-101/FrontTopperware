import styled from 'styled-components';
import { FormContent } from '../Molecules/FormContent';
import { Form, Formik } from 'formik';
import { Valores } from '../../Datos/Datos.Valores'
import { Validaciones } from '../../Datos/Datos.Validaciones'; 
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 247, 243, 1);
    .ContainerForm{
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 1vw;
        button{
            margin-top: 1vw;
        }
    }
`;
export function FormLogin() {
    return (
        <Container>
            <Formik 
                initialValues={Valores}
                validate={(v) => Validaciones(v)}
                onSubmit={({ resetForm }) => {
                    resetForm();
                    console.log('Formulario enviado');
                }}>
                <Form className='ContainerForm'>
                    <FormContent />
                </Form>
            </Formik>
        </Container>
    )
}