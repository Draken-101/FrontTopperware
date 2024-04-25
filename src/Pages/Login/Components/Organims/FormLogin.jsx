import styled from 'styled-components';
import './FormLogin.styl'
import { FormContent } from '../Molecules/FormContent';
import { Form, Formik } from 'formik';
import { Valores } from '../../Datos/Datos.Valores'
import { Validaciones } from '../../Datos/Datos.Validaciones';
import { LoginLogo } from '../../../../Components/Molecules/LoginLogo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
                        const Data = JSON.stringify({
                            email: values.email,
                            password: values.password
                        });

                        const headers = {
                            'Content-Type': 'application/json'
                        }

                        await axios.post('http://3.135.157.51:27017/api/auth/singin', Data, { headers: headers })
                            .then(res => {
                                setMessageErrorSesion('')
                                if (res.error) {
                                    console.log(res.message);
                                    setMessageErrorSesion(res.message);
                                } else {
                                    localStorage.setItem('token', res.data.token);
                                    localStorage.setItem('emprendedora', res.data.numeroCliente)
                                    navigate(res.data.path)
                                }
                                resetForm();
                            }).catch(error => {
                                console.log(error);
                            });
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