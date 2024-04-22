import styled from 'styled-components';
import { ErrorMessage, Field, Form, useFormikContext } from 'formik';
import { Label } from '../../../../Components/Atoms/Label';
import { MessageError } from '../../../../Components/Atoms/MessageError';
import { ButtonPurple } from '../../../../Components/Atoms/ButtonPurple';
const Div = styled.div`
    width: 100%;
    margin-top: 1vw;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;

export function FormAdd() {
    const { errors } = useFormikContext();
    return (
        <Form className='ProductForm'>
            <Div key={'cantidad'} >
                <Label htmlFor={'cantidad'} > {'Cantidad'} </Label>
                <Field className='Field' placeholder={'Ej. 0'} id={'cantidad'} name={'cantidad'} type={'number'} />
                <ErrorMessage name={'cantidad'} component={() => (<MessageError message={errors['cantidad']} />)} />
            </Div>
            <ButtonPurple type='submit'>
                Agregar
            </ButtonPurple>
        </Form>
    )
}