import styled from 'styled-components';
import './OrderForm.styl'
import { ValoresShippingForm } from '../../Datos/Datos.ValoresShippingForm';
import { ValidacionesShippingForm } from '../../Datos/Datos.ValidacionesShippingForm';
import { Form, Formik } from 'formik';
import { InputsGenerator } from '../../../../Components/Molecules/InputsGenerator';
import { InputsShippingForm } from '../../Datos/Datos.InputsShippingForm';
import { Label } from '../../../../Components/Atoms/Label';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
const Container = styled.div`
    width: calc(50% - 4vw);
    height: calc( 100% - 4vw);
    padding: 2vw;
`;
export function OrderForm({Cancelar, SaveData}){
    return(
        <Container>
            <Formik 
                    initialValues={ValoresShippingForm}
                    validate={(v) => ValidacionesShippingForm(v)}
                    onSubmit={({ resetForm }) => {
                        resetForm();
                        console.log('Formulario enviado');
                    }}>
                    <Form className='ContainerOrderForm'>
                        <h1>Datos de envio</h1>
                        <InputsGenerator Inputs={InputsShippingForm} />
                        <ButtonPinkRed onClick={Cancelar} className='Pink'> Cancelar </ButtonPinkRed>
                        <ButtonPurple onClick={SaveData} className='Purple'> Guardar datos </ButtonPurple>
                    </Form>
                </Formik>
        </Container>
    )
}