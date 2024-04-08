import styled from 'styled-components';
import './OrderForm.styl'
import { ValoresShippingForm } from '../../Datos/Datos.ValoresShippingForm';
import { ValidacionesShippingForm } from '../../Datos/Datos.ValidacionesShippingForm';
import { Form, Formik } from 'formik';
import { InputsGenerator } from '../../../../Components/Molecules/InputsGenerator';
import { InputsShippingForm } from '../../Datos/Datos.InputsShippingForm';
import { ButtonPinkRed } from '../../../../Components/Atoms/ButtonPinkRed';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
import { Countries } from '../../../../Datos/Datos.Countries';
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
                    onSubmit={(values, { resetForm }) => {
                        
                        console.log("a");
                        resetForm();
                    }}>
                    <Form className='ContainerOrderForm'>
                        <h1>Datos de envio</h1>
                        <InputsGenerator Inputs={InputsShippingForm} />
                        <ButtonPinkRed onClick={() => Cancelar()} type="button" className='Pink'> Cancelar </ButtonPinkRed>
                        <ButtonPurple type='submit' className='Purple'> Guardar datos </ButtonPurple>
                    </Form>
                </Formik>
        </Container>
    )
}