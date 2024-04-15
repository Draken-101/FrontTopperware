import styled from 'styled-components';
import './FormLogin.styl'
import { FormContent } from '../Molecules/FormContent';
import { ErrorMessage, Form, Formik } from 'formik';
import { Valores } from '../../Datos/Datos.Valores'
import { Validaciones } from '../../Datos/Datos.Validaciones';
import { LoginLogo } from '../../../../Components/Molecules/LoginLogo';
import { getToken } from '../../../../Fetching/getToken';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 247, 243, 1);
`;
export function FormLogin() {
    const [messageErrorSesion, setMessageErrorSesion] = useState('');
    const navigate = useNavigate();
    return (
        <>
            <Container>
                <Formik
                    initialValues={Valores}
                    validate={(v) => Validaciones(v)}
                    onSubmit={async (values, { resetForm }) => {
                        let token = await getToken(values.email, values.password);
                        console.log(token.message);
                        setMessageErrorSesion('')
                        if (token.error) {
                            console.log(token.message);
                            setMessageErrorSesion(token.message);
                        } else {
                            localStorage.setItem('token', token.token);
                            navigate('/AdminEntrepreneurs')
                        }
                        resetForm();
                        console.log('Formulario enviado');
                    }}>
                    <Form className='ContainerFormLogin'>
                        <FormContent Error={messageErrorSesion} />
                    </Form>
                </Formik>
            </Container>
            <LoginLogo Width={"50%"} />
        </>
    )
}