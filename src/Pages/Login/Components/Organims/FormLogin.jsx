import styled from 'styled-components';
import './FormLogin.styl'
import { FormContent } from '../Molecules/FormContent';
import { Form, Formik } from 'formik';
import { Valores } from '../../Datos/Datos.Valores'
import { Validaciones } from '../../Datos/Datos.Validaciones'; 
import { LoginLogo } from '../../../../Components/Molecules/LoginLogo';
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 247, 243, 1);
`;
export function FormLogin() {
    return (
        <>
            <Container>
                <Formik 
                    initialValues={Valores}
                    validate={(v) => Validaciones(v)}
                    onSubmit={({ resetForm }) => {
                        resetForm();
                        console.log('Formulario enviado');
                    }}>
                    <Form className='ContainerFormLogin'>
                        <FormContent />
                    </Form>
                </Formik>
            </Container>
            <LoginLogo Width={"50%"}/>
        </>
    )
}